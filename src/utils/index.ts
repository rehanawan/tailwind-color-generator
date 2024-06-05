import {IHslShade} from "./ShadeGenerator.tsx";

export function classNames(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ')
}

export function hslToHex(h:number, s:number, l:number): string {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n:number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and pad with 0 if necessary
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}
export function IHslShadeToHex(shade:IHslShade): string {
    return hslToHex(shade.hue, shade.saturation, shade.lightness);
}