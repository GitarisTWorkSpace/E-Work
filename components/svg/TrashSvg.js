import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TrashSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="#EEE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 8h24M25.333 8v18.667a2.667 2.667 0 0 1-2.666 2.666H9.333a2.667 2.667 0 0 1-2.666-2.666V8m4 0V5.333a2.667 2.667 0 0 1 2.666-2.666h5.334a2.667 2.667 0 0 1 2.666 2.666V8M13.333 14.667v8M18.667 14.667v8"
    />
  </Svg>
)
export default TrashSvg
