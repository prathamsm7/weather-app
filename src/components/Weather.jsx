import { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiLoaderCircle } from "react-icons/bi";
import WeatherData from "./WeatherData";
import { toast } from "react-hot-toast";
import { fetchData } from "../helperFunctions";

const Weather = () => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState({ type: "", status: false });
  const [isDataAvailable, setIsDataAvailable] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  //Get Weather data by User Device location
  const getLocation = () => {
    setLoading({ status: true, type: "button" });
    setIsDataAvailable(false);
    setSearchText("");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const data = await fetchData(
            "",
            position.coords.latitude,
            position.coords.longitude
          );
          setWeatherData(data);

          if (!data.base) {
            toast.error("Something went wrong");
            setLoading({ type: "", status: false });
            return false;
          }

          setTimeout(() => {
            setLoading({ type: "", status: false });
            setIsDataAvailable((prev) => !prev);
          }, 1000);
        },
        (error) => {
          console.error(error);
          setLoading({ status: false, type: "" });
          toast.error(
            "Your precise location could not be determined. Please allow location permission."
          );
        }
      );
    } else {
      // console.error("Geolocation is not supported by this browser.");
      setLoading({ status: false, type: "" });
      toast.error("Geolocation is not supported by this browser.");
      return false;
    }
  };

  function handleChange(e) {
    const searchText = e.target.value;
    let setTypingTimeout;

    const re = /^[A-Za-z]+$/;
    if (searchText === "" || re.test(searchText)) {
      setSearchText(searchText);
    }

    setLoading({
      type: "input",
      status: true,
    });

    setTypingTimeout = setTimeout(() => {
      // Perform actions when user stops typing
      setLoading({
        type: "",
        status: false,
      });

      clearTimeout(setTypingTimeout);
    }, 800);
  }

  //Get Data on form submit
  function handleSubmit(e) {
    e.preventDefault();
    if (searchText.length < 3) {
      toast.error("Enter atleast 3 or more letters", {
        style: { backgroundColor: "orange", color: "white" },
        icon: "ℹ",
      });
      return;
    }
    getData();
  }

  async function getData() {
    const data = await fetchData(searchText);
    if (data.cod === "404") {
      toast.error(data.message || "Something went wrong");
      setLoading({ type: "", status: false });
      return false;
    }
    setWeatherData(data);
    setIsDataAvailable((prev) => !prev);
    setLoading({ type: "", status: false });
    setSearchText("");
  }

  //Get Data on form input change
  useEffect(() => {
    const timeoutId =
      searchText.length >= 3 &&
      setTimeout(() => {
        getData();
      }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchText]);
  return (
    <div className="appContainer">
      <div className="head">
        {isDataAvailable && (
          <IoMdArrowRoundBack
            className="backArrow"
            onClick={() => {
              setIsDataAvailable((prev) => !prev);
              setSearchText("");
            }}
          />
        )}
        <p>Weather App</p>
      </div>
      <hr />
      <div>
        {isDataAvailable ? (
          <WeatherData weatherData={weatherData} />
        ) : (
          <>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                value={searchText}
                placeholder="Enter City Name"
                onChange={handleChange}
              />
              {loading.status && loading.type === "input" && (
                <BiLoaderCircle className="spinner" />
              )}
              <div className="divider">or</div>
            </form>
            <div
              className={`buttonDiv ${
                loading.status ? "buttonDivDisabled" : ""
              }`}
            >
              <button onClick={getLocation} disabled={loading.status}>
                Get Device Location
              </button>
              {loading.status && loading.type === "button" && (
                <BiLoaderCircle className="spinner" />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
