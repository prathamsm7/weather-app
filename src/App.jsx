import "./App.css";
import { Toaster, toast } from "react-hot-toast";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <Toaster />
      <Weather />
    </>
  );
}

export default App;
