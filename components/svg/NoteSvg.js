import * as React from "react";
import Svg, { Path } from "react-native-svg";
const NoteSvg = (props) => (
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
      d="M14.667 5.333H5.333A2.667 2.667 0 0 0 2.667 8v18.667a2.667 2.667 0 0 0 2.666 2.666H24a2.666 2.666 0 0 0 2.667-2.666v-9.334"
    />
    <Path
      stroke="#EEE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24.667 3.333a2.828 2.828 0 1 1 4 4L16 20l-5.333 1.333L12 16 24.667 3.333Z"
    />
  </Svg>
)
export default NoteSvg
