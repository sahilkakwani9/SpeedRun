import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const widthRatio = width / 375;

const Constants = {
  TOP_PIPE_WIDTH: widthRatio * 80,
  BOTTOM_PIPE_WIDTH: widthRatio * 80,
};
export default Constants;
export {width, height};
