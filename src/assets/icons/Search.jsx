import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function Search(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M21 21l-3-3"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Circle cx={11} cy={12} r={9} stroke="#fff" strokeWidth={1.5} />
    </Svg>
  );
}

export default Search;
