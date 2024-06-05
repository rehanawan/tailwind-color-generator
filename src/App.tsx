import * as React from "react";
import {useState} from "react";
import ColorDisplay from "./components/ColorDisplay";
import NumberInput from "./components/NumberInput";
import ShadeCode from "./components/ShadeCode";
import {ShadeGenerator} from "./utils/ShadeGenerator";
import ShadesExample from "./components/ShadesExample";
import {Field, Label, Switch} from "@headlessui/react";
import {classNames} from "./utils";

const App: React.FC = () => {
    const [showHex, setShowHex] = useState(false);
    const [hue, setHue] = useState(359);
    const [saturation, setSaturation] = useState(19);
    const [endSaturation, setEndSaturation] = useState(32);
    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    return (
        <div className="max-w-5xl mx-auto p-4 w-full text-gray-900 antialiased">
            <h1 className="text-4xl font-bold py-4 text-center">TailwindCSS Color Generator</h1>
            <div className={"flex justify-end"}>
                <Field as={"div"} className={"flex items-center space-x-4"}>
                    <Label as={"span"}>
                        <span className="text-gray-700 font-medium">Show HSL values</span>
                    </Label>
                    <Switch
                        checked={showHex}
                        onChange={setShowHex}
                        className={classNames(
                            showHex ? `bg-amber-200` : 'bg-gray-200',
                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2'
                        )}
                    >
                        <span className="sr-only">Use setting</span>
                        <span
                            aria-hidden="true"
                            className={classNames(
                                showHex ? 'translate-x-5' : 'translate-x-0',
                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                        />
                    </Switch>
                    <Label as={"span"}>
                        <span className="text-gray-700 font-medium">Show HEX values</span>
                    </Label>
                </Field>
            </div>
            <div className="flex space-x-16">
                <div className={"min-w-56"}>
                    <ul className="space-y-4">
                        {ShadeGenerator(shades, hue, saturation, endSaturation).map(
                            (hslShade) => (
                                <li key={hslShade.shade}>
                                    <ColorDisplay
                                        shade={hslShade.shade}
                                        hue={hslShade.hue}
                                        saturation={hslShade.saturation}
                                        lightness={hslShade.lightness}
                                        showHex={showHex}
                                    />
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <div className="flex-1 space-y-4 flex flex-col justify-between">
                    <div className="space-y-4">
                        <NumberInput
                            title="Hue"
                            value={hue}
                            setValue={setHue}
                            max={360}
                            min={0}
                        />
                        <NumberInput
                            title="Saturation"
                            value={saturation}
                            setValue={setSaturation}
                            max={101}
                            min={0}
                        />
                        <NumberInput
                            title="Saturate Ends"
                            value={endSaturation}
                            setValue={setEndSaturation}
                            max={101}
                            min={-100}
                        />
                    </div>
                    <div>
                        <ShadesExample
                            shades={ShadeGenerator(shades, hue, saturation, endSaturation)}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-8">
        <pre className="bg-gray-200 rounded p-4">
          <span className="text-gray-500 select-none">{`module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      colors: {
`}</span>
            {`        blue: {
`}
            {ShadeGenerator(shades, hue, saturation, endSaturation).map(
                (hslShade) => (
                    <ShadeCode
                        key={hslShade.shade}
                        hue={hslShade.hue}
                        saturation={hslShade.saturation}
                        shade={hslShade.shade}
                        lightness={hslShade.lightness}
                        showHex={showHex}
                    />
                )
            )}
            {`        }`}
            <span className="text-gray-500 select-none">{`
      },
    },
  },
  variants: {},
  plugins: [],
};`}</span>
        </pre>
            </div>
        </div>
    );
};

export default App;
