import * as React from "react";
import {HslCode} from "./HslCode";
import {hslToHex} from "../utils";

interface IColorDisplayProps {
  hue: number;
  saturation: number;
  lightness: number;
  shade: number;
  showHex: boolean;
}

const ColorDisplay: React.FC<IColorDisplayProps> = ({
  hue,
  saturation,
  lightness,
  shade,
    showHex,
}) => {
  return (
    <div className="flex space-x-4 items-center">
      <div className="rounded shadow-md w-12 h-12 p-1">
        <div
          className="w-full h-full rounded"
          style={{
            backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
          }}
        ></div>
      </div>
      <div>
        <h3 className="font-semibold">{shade}</h3>
        <p className="font-mono text-gray-700 text-sm">
          {!showHex && HslCode(hue, saturation, lightness)}
          {showHex && hslToHex(hue, saturation, lightness)}
        </p>
      </div>
    </div>
  );
};

export default ColorDisplay;
