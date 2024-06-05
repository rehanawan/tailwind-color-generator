export interface IHslShade {
  shade: number;
  hue: number;
  saturation: number;
  lightness: number;
}

const MIN_LIGTHNESS = 18;
const MAX_LIGTHNESS = 97;

export const ShadeGenerator = (
  shades: number[],
  hue: number,
  saturation: number,
  endSaturation: number
): IHslShade[] => {
  const calculateSaturation = (
    saturation: number,
    index: number,
    shadesAmount: number
  ): number => {
    const value = Math.abs(shadesAmount / 2 - index);
    const extraSaturation = (endSaturation / 10) * Math.pow(value, 2);
    const calculatedValue = Math.round(saturation + extraSaturation);
    if (calculatedValue < 0) {
      return 0;
    } else if (calculatedValue > 100) {
      return 100;
    } else {
      return calculatedValue;
    }
  };

  const calculateLightness = (
      _lightness: number,
    index: number,
    min: number,
    max: number,
    shadesAmount: number
  ): number => {
    const lightnessUnit = (max - min) / (shadesAmount - 1);
    return Math.round(max - lightnessUnit * index);
  };

  return shades.map((shade, index) => ({
    hue: hue,
    saturation: calculateSaturation(saturation, index, shades.length),
    shade: shade,
    lightness: calculateLightness(
      10,
      index,
      MIN_LIGTHNESS,
      MAX_LIGTHNESS,
      shades.length
    ),
  }));
};
