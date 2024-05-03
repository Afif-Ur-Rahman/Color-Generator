import { useState } from "react";
import { SketchPicker } from "react-color";
import tinycolor from "tinycolor2";

import "./App.css";

const App = () => {
  const [hex, setHex] = useState("#ffffff");
  const [rgba, setRgba] = useState("rgba(255, 255, 255, 1)");
  const [hsl, setHsl] = useState("hsl(0, 0%, 100%)");
  const [isCopiedHex, setIsCopiedHex] = useState(false);
  const [isCopiedRgba, setIsCopiedRgba] = useState(false);
  const [isCopiedHsl, setIsCopiedHsl] = useState(false);

  const handleColor = (newColor) => {
    setHex(newColor.hex);
    setRgba(
      `rgba(${newColor.rgb.r}, ${newColor.rgb.g}, ${newColor.rgb.b}, ${newColor.rgb.a})`
    );
    setHsl(
      `hsl(${newColor.hsl.h.toFixed(0)}, ${newColor.hsl.s.toFixed(
        2
      )}%, ${newColor.hsl.l.toFixed(2)}%)`
    );
  };

  const handleColorChange = () => {
    const color = tinycolor.random();
    const rgb = color.toRgb();
    const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
    const hsl = color.toHslString();
    setHex(color.toHexString());
    setRgba(rgba);
    setHsl(hsl);
  };

  const handleCopyHex = () => {
    navigator.clipboard.writeText(hex);
    setIsCopiedHex(true);
    setTimeout(() => {
      setIsCopiedHex(false);
    }, 1000);
  };

  const handleCopyRgba = () => {
    navigator.clipboard.writeText(rgba);
    setIsCopiedRgba(true);
    setTimeout(() => {
      setIsCopiedRgba(false);
    }, 1000);
  };

  const handleCopyHsl = () => {
    navigator.clipboard.writeText(hsl);
    setIsCopiedHsl(true);
    setTimeout(() => {
      setIsCopiedHsl(false);
    }, 1000);
  };

  return (
    <>
      <div
        className="flex justify-center font-mono w-full h-screen"
        style={{ backgroundColor: hex }}
      >
        <div className="main flex justify-center items-center bg-white rounded-lg border-2 border-gray-300 bg-opacity-70 w-max p-4 mt-4">
          <div className="flex flex-col mr-2">
            <h1 className="font-mono text-xl font-bold pb-2">
              Random Color Generator
            </h1>
            <button
              className="rounded-3xl text-black bg-transparent w-full"
              onClick={() => handleColorChange()}
            >
              Click to Generate Color
            </button>
            <div className="flex justify-center items-center mt-2 flex-wrap flex-col">
            <h1 className="font-mono text-sm flex flex-wrap">
              Click Buttons Below to Copy
            </h1>
              <button
                className="rounded-3xl flex justify-center items-center m-1 bg-transparent tooltip w-full"
                onClick={() => handleCopyHex()}
              >
                {hex}
                <span
                  className={`tooltiptext ${isCopiedHex ? "block" : "hidden"}`}
                >
                  Copied!
                </span>
              </button>
              <button
                className="rounded-3xl flex justify-center items-center m-1 bg-transparent tooltip w-full"
                onClick={() => handleCopyRgba()}
              >
                {rgba}
                <span
                  className={`tooltiptext ${isCopiedRgba ? "block" : "hidden"}`}
                >
                  Copied!
                </span>
              </button>
              <button
                className="rounded-3xl flex justify-center items-center m-1 bg-transparent tooltip w-full"
                onClick={() => handleCopyHsl()}
              >
                {hsl}
                <span
                  className={`tooltiptext ${isCopiedHsl ? "block" : "hidden"}`}
                >
                  Copied!
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col ml-2">
            <h1 className="font-mono text-xl font-bold pb-2">Color Picker</h1>
            <SketchPicker color={hex} onChange={handleColor} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
