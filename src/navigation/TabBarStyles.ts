import styled from 'styled-components/native';
import {Dimensions, Animated} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const TAB_BAR_WIDTH = windowWidth / 4;
const ANIMATED_PART_HEIGHT = 2;

export const Container = styled.View`
  flex-direction: column;
  border-top-color: #444;
  border-top-width: 0.5px;
  background-color: #fff;
  height: 80px;
`;

export const InnerView = styled.View`
  width: ${() => TAB_BAR_WIDTH}px;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 50px;
`;

export const AnimatedView = styled(Animated.View)`
  width: ${() => TAB_BAR_WIDTH}px;
  height: ${() => ANIMATED_PART_HEIGHT}px;
  background-color: #345567;
`;

export const AnimatedWrapper = styled.View`
  width: ${() => TAB_BAR_WIDTH}px;
  align-items: center;
  justify-content: center;
`;
