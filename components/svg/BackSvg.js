import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.695 15.265-5-5 5-5"
    />
  </Svg>
)
export default BackSvg
