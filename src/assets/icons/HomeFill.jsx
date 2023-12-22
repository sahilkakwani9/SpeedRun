import * as React from 'react';
import Svg, {G, Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function HomeFill(props) {
  return (
    <Svg
      width={94}
      height={95}
      viewBox="0 0 94 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d_1_3657)">
        <Rect
          x={13.5}
          y={8}
          width={56}
          height={56}
          rx={28}
          fill="url(#paint0_linear_1_3657)"
        />
      </G>
      <Path
        d="M38.635 44.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1A3.41 3.41 0 0051 42.579v-8.711c0-.734-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072l-6.518 5.218A2.474 2.474 0 0032 33.867v8.702C32 44.464 33.547 46 35.456 46h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_3657"
          x1={41.5}
          y1={2}
          x2={41.5}
          y2={46}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#08AD2C" />
          <Stop offset={1} stopColor="#08AD2C" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default HomeFill;
