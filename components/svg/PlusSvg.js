import * as React from "react"
import Svg, { Path } from "react-native-svg"
const plusSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M21 8.75v24.5M8.75 21h24.5"
    />
  </Svg>
)
export default plusSvg
