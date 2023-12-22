import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function Profile(props) {
  return (
    <Svg
      width={57}
      height={56}
      viewBox="0 0 57 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M28.5 37c-3.954 0-6.818 0-8.676-2.545C17.965 31.909 24.545 30 28.5 30c3.954 0 10.535 1.91 8.676 4.455C35.316 37 32.454 37 28.5 37z"
        stroke="#818288"
        strokeWidth={1.5}
        fill="#fff"
      />
      <Circle cx={28.5} cy={22} r={5} stroke="#818288" strokeWidth={1.5} />
      <Circle
        cx={28.5}
        cy={22}
        r={5}
        stroke="#000"
        strokeOpacity={0.2}
        strokeWidth={1.5}
        fill="#fff"
      />
    </Svg>
  );
}

export default Profile;
