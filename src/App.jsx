import { useState } from "react";
import { SketchPicker } from "react-color";
import Clipboard from "./assets/Clipboard.svg";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("#ffffff");
  const [isCopied, setIsCopied] = useState(false);

  const handleHexColor = (newColor) => {
    console.log(newColor);
    setColor(newColor.hex);
  };
  const handleColorChange = () => {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(color);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <>
      <div
        className="flex justify-center flex-wrap items-center font-mono w-full h-screen"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-center items-center">
          <div className="main flex justify-center items-center bg-white rounded-lg border-2 border-gray-300 bg-opacity-70 w-max p-4">
            <div className="m-4">
              <h1 className="font-mono text-xl font-bold pb-2">
                Random Color Generator
              </h1>
              <div className="flex justify-center items-center">
                <button
                  className="rounded-3xl text-black bg-transparent"
                  onClick={() => handleColorChange()}
                >
                  {color}
                </button>
                <button
                  className="rounded-3xl flex justify-center items-center bg-transparent tooltip"
                  onClick={() => handleCopy()}
                >
                  <img src={Clipboard} alt="Clipboard Logo" />
                  <span
                    className={`tooltiptext ${isCopied ? "block" : "hidden"}`}
                  >
                    Copied!
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col m-4">
              <h1 className="font-mono text-xl font-bold pb-2">Color Picker</h1>
              <SketchPicker color={color} onChange={handleHexColor} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
