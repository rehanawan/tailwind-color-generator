import * as React from "react";
import {HslCode} from "./HslCode";
import {hslToHex} from "../utils";

interface IShadeCodeProps {
  hue: number;
  saturation: number;
  lightness: number;
  shade: number;
  showHex: boolean;
}

const ShadeCode: React.FC<IShadeCodeProps> = ({
  hue,
  saturation,
  lightness,
  shade,
    showHex,
}) => {
  return (
    <>{`          '${shade}': '${showHex?hslToHex(hue,saturation,lightness):HslCode(hue, saturation, lightness)}'${
      shade < 900 ? "," : ""
    }
`}</>
  );
};

export default ShadeCode;
