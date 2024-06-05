import * as React from "react";
import {IHslShade} from "../utils/ShadeGenerator";
import {HslCode} from "./HslCode";

const ShadesExample: React.FC<{ shades: IHslShade[] }> = ({ shades }) => {
  return (
    <div
      style={{
        backgroundColor: HslCode(
          shades[0].hue,
          shades[0].saturation,
          shades[0].lightness
        ),
      }}
      className="w-full"
    >
      <div
        style={{
          backgroundColor: HslCode(
            shades[8].hue,
            shades[8].saturation,
            shades[8].lightness
          ),
        }}
        className="w-full flex justify-between p-4"
      >
        <p
          style={{
            color: HslCode(
              shades[0].hue,
              shades[0].saturation,
              shades[0].lightness
            ),
          }}
          className="px-4 py-2"
        >
          Home
        </p>
        <div className="flex space-x-4">
          <p
            style={{
              color: HslCode(
                shades[0].hue,
                shades[0].saturation,
                shades[0].lightness
              ),
            }}
            className="px-4 py-2"
          >
            Signin
          </p>
          <button
            style={{
              color: HslCode(
                shades[0].hue,
                shades[0].saturation,
                shades[0].lightness
              ),
              backgroundColor: HslCode(
                shades[6].hue,
                shades[6].saturation,
                shades[6].lightness
              ),
            }}
            className="px-4 py-1 rounded shadow focus:outline-none "
          >
            Register
          </button>
        </div>
      </div>
      <div className="px-8 mt-8">
        <div
          style={{
            borderColor: HslCode(
              shades[2].hue,
              shades[2].saturation,
              shades[2].lightness
            ),
            backgroundColor: HslCode(
              shades[1].hue,
              shades[1].saturation,
              shades[1].lightness
            ),
          }}
          className="p-4 border-2 rounded-lg flex items-center space-x-4"
        >
          <div
            style={{
              backgroundColor: HslCode(
                shades[2].hue,
                shades[2].saturation,
                shades[2].lightness
              ),
            }}
            className="p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8"
              style={{
                color: HslCode(
                  shades[7].hue,
                  shades[7].saturation,
                  shades[7].lightness
                ),
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <div>
            <h3
              className="text-lg font-semibold"
              style={{
                color: HslCode(
                  shades[9].hue,
                  shades[9].saturation,
                  shades[9].lightness
                ),
              }}
            >
              Information
            </h3>
            <p
              style={{
                color: HslCode(
                  shades[8].hue,
                  shades[8].saturation,
                  shades[8].lightness
                ),
              }}
            >
              This is an example that will help you see how your colours would
              look like on a real page.
            </p>
          </div>
        </div>
        <div className="mt-8 pb-8 flex justify-between">
          <button
            style={{
              color: HslCode(
                shades[7].hue,
                shades[7].saturation,
                shades[7].lightness
              ),
            }}
            className="py-2 font-semibold focus:outline-none"
          >
            Reset
          </button>
          <div className="flex space-x-4">
            <button
              style={{
                borderColor: HslCode(
                  shades[1].hue,
                  shades[1].saturation,
                  shades[1].lightness
                ),
                color: HslCode(
                  shades[7].hue,
                  shades[7].saturation,
                  shades[7].lightness
                ),
              }}
              className="px-4 py-2 font-semibold border-2 rounded focus:outline-none"
            >
              Cancel
            </button>
            <button
              style={{
                backgroundColor: HslCode(
                  shades[7].hue,
                  shades[7].saturation,
                  shades[7].lightness
                ),
                color: HslCode(
                  shades[0].hue,
                  shades[0].saturation,
                  shades[0].lightness
                ),
              }}
              className="px-4 py-2 font-semibold rounded shadow flex items-center focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 mr-2"
                style={{
                  color: HslCode(
                    shades[2].hue,
                    shades[2].saturation,
                    shades[2].lightness
                  ),
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Accept Shades
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShadesExample;
