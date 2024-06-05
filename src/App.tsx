import * as React from "react";
import {useState} from "react";
import ColorDisplay from "./components/ColorDisplay";
import NumberInput from "./components/NumberInput";
import ShadeCode from "./components/ShadeCode";
import {ShadeGenerator} from "./utils/ShadeGenerator";
import ShadesExample from "./components/ShadesExample";
import {Field, Label, Switch} from "@headlessui/react";
import {classNames} from "./utils";
import Footer from "./components/Footer.tsx";

const App: React.FC = () => {
    const [showHex, setShowHex] = useState(false);
    const [hue, setHue] = useState(359);
    const [saturation, setSaturation] = useState(19);
    const [endSaturation, setEndSaturation] = useState(32);
    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const items = Array.from({length: 360}, (_, index) => index + 1);

    // const [saturation, setSaturation] = useState(100);

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
                <div className="flex-1 space-y-4 flex flex-col justify-between mt-8">
                    <div className="space-y-4">
                    <div className="">
                        <table className={"border-collapse w-full"}>
                            <tbody>
                            <tr>
                                {
                                    items.map((item) => (
                                        <td
                                            key={item}
                                            className={"relative"}
                                        >
                                            <div
                                                className={`${item == hue ? 'inline' : 'hidden'} absolute text-center -top-8 -left-4`}
                                                id={`huepointer${item}`}>
                                                <div className={"border rounded w-9"}>{item}</div>
                                                <div className={"flex items-center content-center justify-center"}>

                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24"
                                                         strokeWidth={1.5} stroke="currentColor" className="size-2">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                                    </svg>
                                                </div>

                                            </div>

                                        </td>
                                    ))
                                }
                            </tr>
                            <tr>
                                {
                                    items.map((item) => (
                                        <td
                                            key={item}
                                            className={'h-8'}
                                            style={{backgroundColor: `hsl(${item}, 100%, 50%)`, height: "22px"}}
                                            onClick={() => setHue(item)}
                                            title={`Hue: ${item}`}
                                        >
                                        </td>
                                    ))
                                }
                            </tr>
                            </tbody>
                        </table>
                        <NumberInput
                            title="Hue"
                            value={hue}
                            setValue={setHue}
                            max={360}
                            min={0}
                        />
                    </div>
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
            {`        'my-color': {
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
            <Footer/>
        </div>
    );
};

export default App;
