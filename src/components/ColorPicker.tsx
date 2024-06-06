import React, {useCallback, useEffect, useRef, useState} from 'react';
import colors, {Palette} from '../utils/colors';

const ColorPicker:React.FC<{onGenerate:(e:Palette | undefined)=>void}> = ({ onGenerate }) => {
    const [color, setColor] = useState('');
    const [isMac, setIsMac] = useState(/Mac|iPod|iPhone|iPad/.test(navigator.platform));
    const inputColorRef = useRef(null);
    const inputColorPickerRef = useRef(null);

    useEffect(() => {
        const handleKeydown = (e:KeyboardEvent) => {
            const isCmd = isMac ? e.metaKey : e.ctrlKey;

            if (isCmd && e.key === 'k') {
                e.preventDefault();
                if (inputColorRef.current)
                    inputColorRef.current.focus();
            }
        };

        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [isMac]);

    const newColorInHex = color && [4, 7].includes(color.length) ? (color.length === 4 ? `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}` : color) : null;

    const isColorValid = useCallback((color:string) => /^#?[0-9A-F]{6}$/i.test(color), []);

    const generate = useCallback((color:string|null) => {
        if (!color) {
            return;
        }
        if (!isColorValid(color)) {
            return;
        }

        onGenerate(colors(color));
        setColor('');
    }, [isColorValid, onGenerate]);

    const addPrefixValue = (color:string) => {
        if (!color) {
            setColor('#');
        } else {
            setColor(`#${cleanUpColorValue(color)}`);
        }
    };

    const clearValue = () => {
        if (color === '#') {
            setColor('');
        }
    };

    const cleanUpColorValue = (color:string) => color.replace(/[^0-9A-F]/gi, '').slice(0, 6);

    const updateInputColorValue = (e:never) => {
            setColor(e.target.value);
    };

    const cleanUpClipboardValue = (e: { clipboardData: { getData: (arg0: string) => never; }; }) => {
        const pastingText = e.clipboardData?e.clipboardData.getData('text/plain'):'';
        setColor(cleanUpColorValue(pastingText || ''));
    };

    const handleKeydown = (e: { metaKey: never; ctrlKey: never; key: string; preventDefault: () => void; }) => {
        const isCmd = isMac ? e.metaKey : e.ctrlKey;

        if (isCmd && e.key === 'ArrowDown') {
            e.preventDefault();
            if (inputColorPickerRef.current)
                inputColorPickerRef.current.click();
        }
    };

    return (

        <div className="w-full sm:max-w-xs flex">
            <label htmlFor="color-code" className="sr-only">Color Hex Code</label>
            <div className="relative rounded-md shadow-sm w-full md:w-auto">
        <span
            className="inline-block h-4 w-4 rounded-full absolute left-0 ml-3 top-1/2 transform -translate-y-1/2 items-center border"
            style={{ backgroundColor: `#${color.replace('#', '')}` }}
        ></span>

                <input
                    id="color-code"
                    value={color}
                    onChange={(e) => addPrefixValue(e.target.value)}
                    type="text"
                    className="focus:ring-primary-500 focus:border-primary-500 block w-full px-10 tracking-wide sm:text-sm border-gray-300 rounded-md"
                    placeholder={`Color hex code (${isMac ? '⌘' : 'Ctrl+'}K)`}
                    maxLength={7}
                    ref={inputColorRef}
                    onInput={() => addPrefixValue('')}
                    onBlur={clearValue}
                    onFocus={(e) => addPrefixValue(e.target.value)}
                    onPaste={cleanUpClipboardValue}
                    onKeyUp={(e) => e.key === 'Enter' && generate(newColorInHex)}
                    onKeyDown={handleKeydown}
                />

                <span
                    className="inline-block hover:text-white hover:bg-black p-1 rounded-full absolute right-0 mr-3 top-1/2 transform -translate-y-1/2 items-center cursor-pointer"
                >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="toe-icon ti ti-eye-dropper h-4 w-4"
              viewBox="0 0 64 64"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              strokeLinecap="round"
              strokeLinejoin="round"
          >
            <path
                d="M32.132 21.23L42.644 32l-20.85 20.848c-.52.476-.63.45-.977.555L10.59 55.959c-1.47.299-2.853-1.051-2.55-2.55l2.557-10.225c.1-.335.133-.52.555-.977 10.694-10.696 20.979-20.976 20.979-20.976zm4.775 10.56l-4.788-4.605-17.581 17.581-1.567 6.264 6.263-1.568L36.907 31.79zM42.768 10.337s4.213-5.685 10.578.678c5.655 5.657.023 10.254.023 10.254l-7.186 7.02 3.413 3.444-2.615 2.618-17.686-17.686 2.612-2.598 3.56 3.53 7.3-7.26z"
                fillRule="nonzero"
            ></path>
          </svg>

          <input
              type="color"
              value={newColorInHex || ''}
              onInput={updateInputColorValue}
              ref={inputColorPickerRef}
              className="opacity-0 w-full h-full inline-block absolute top-0 left-0"
          />
        </span>
            </div>
            <button
                type="button"
                disabled={!isColorValid(color)}
                className={`ml-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                    isColorValid(color) ? 'bg-primary-600 hover:bg-primary-700' : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
                onClick={() => generate(newColorInHex)}
            >
                Generate
            </button>
        </div>
    );
};

export default ColorPicker;
