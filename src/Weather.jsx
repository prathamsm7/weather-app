import { MdOutlineLocationOn } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { getCountryName, imageApi } from "./helperFunctions";

const Weather = ({ weatherData }) => {
  const { main, weather, name, sys } = weatherData;
  return (
    <div className="weatherData">
      <img
        src={`${imageApi + weather[0]?.icon}@2x.png`}
        alt="weather icon"
        className="weatherIcon"
        width="100"
        height="100"
      />
      <p className="temp">{Math.round(main?.temp)} &#8451;</p>
      <p className="desc">{weather[0]?.description}</p>
      <p className="location">
        <MdOutlineLocationOn />
        {name}, {getCountryName(sys?.country)}
      </p>
      <div className="bottom">
        <div>
          <CiTempHigh />
          <div>
            <p className="bottomTemp">{Math.round(main?.feels_like)} &#8451;</p>
            <p className="bottomAttr">Feels Like</p>
          </div>
        </div>
        <div className="gutter"></div>
        <div>
          <WiHumidity />
          <div>
            <p className="bottomTemp">{Math.round(main?.humidity)} &#37;</p>
            <p className="bottomAttr">Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
