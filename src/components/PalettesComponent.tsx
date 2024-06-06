import * as React from "react";
import {getTextColor, Palette} from "../utils/colors.ts";

const PalettesComponent: React.FC<{colors:Palette[]}> = ({colors}) => {
    if (!colors || colors.length === 0) {
        return null;
    }
    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="sticky top-20 bg-white z-10 py-1 hidden lg:flex">
                <div className="max-w-64 w-full capitalize text-center"></div>
                <div className="max-w-24 w-full text-center text-xs">50</div>
                <div className="max-w-24 w-full text-center text-xs">100</div>
                <div className="max-w-24 w-full text-center text-xs">200</div>
                <div className="max-w-24 w-full text-center text-xs">300</div>
                <div className="max-w-24 w-full text-center text-xs">400</div>
                <div className="max-w-24 w-full text-center text-xs">500</div>
                <div className="max-w-24 w-full text-center text-xs">600</div>
                <div className="max-w-24 w-full text-center text-xs">700</div>
                <div className="max-w-24 w-full text-center text-xs">800</div>
                <div className="max-w-24 w-full text-center text-xs">900</div>
                <div className="max-w-24 w-full text-center text-xs">950</div>
            </div>
            <ul className="mt-4">
                {
                    colors.map((color) =>
                <li key={color.colors[500]}>
                    <div className="capitalize text-xs lg:h-24 mb-8 flex flex-col lg:flex-row">
                        <div
                            className="max-w-64 w-full lg:text-right pr-4 h-24 flex items-center lg:justify-end font-medium uppercase text-gray-900 hover:text-black">
                            <span>{color.name}</span></div>
                        {Object.keys(color.colors).map((key, index) =>
                            <div
                                key={key+index}
                                className={`text-center text-xs lg:max-w-24 basis-24 lg:basis-auto w-full min-h-[6rem] h-24 relative overflow-hidden ${index==0?'lg:rounded-l-lg':''} ${index==10?'lg:rounded-r-lg':''}`}>
                                <div
                                    className="w-full h-24 lg:h-full flex lg:items-center lg:justify-center transition p-3"
                                    style={{backgroundColor: color.colors[Number(key)]}}>
                                    <div className="block lg:hidden text-left">{key}</div>
                                </div>
                                <span
                                    className="absolute bottom-2 left-3 lg:left-1/2 transform lg:-translate-x-1/2 lowercase"
                                    style={{color: `${getTextColor(color.colors[Number(key)])}`}}>{color.colors[Number(key)]}</span>
                            </div>
                        )}

                    </div>
                </li>
                    )
                }
            </ul>
        </div>
    );
}
export default PalettesComponent;