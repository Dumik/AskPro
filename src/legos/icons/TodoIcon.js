import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const TodoIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="0 0 512 512"
    fill={props.color}
    {...props}>
    <Path d="M24.7 81c-9.2 2.4-17.9 9.7-21.8 18.5-1.7 3.8-2.3 7-2.3 13.5-.1 7.6.2 9 2.9 13.9 3.3 6 8.7 11 15.4 14.3 6.9 3.4 18.6 3.2 26.3-.4 7-3.2 12.9-9.3 16.4-16.6 2.3-4.9 2.6-6.5 2.2-13.2-.5-8.8-3.2-15.1-9.1-21.2-7.1-7.3-20.3-11.2-30-8.8zM119.5 81.4c-6.1 1.9-9.6 4-13.9 8.3-12.2 12-12.2 32.5 0 44.7 2.2 2.1 6.4 5.1 9.4 6.5l5.5 2.6h335l5.6-2.6c11.7-5.5 18.4-16 18.4-28.9 0-12.9-6.7-23.4-18.4-28.9l-5.6-2.6-166-.2c-131.9-.1-166.8.1-170 1.1zM23.5 225.3c-6.4 2.1-9.7 4.2-14.1 8.9-7.6 7.9-10.5 17.4-8.3 27.6 1.6 7.8 3.9 12 9.4 17.1 6.1 5.6 12.1 8.1 20.9 8.8 6.5.5 8 .3 13.2-2.1 7.7-3.5 12.9-8.7 16.5-16.1 7.6-15.8.5-34.8-15.8-42.2-6.6-3-16-3.9-21.8-2zM116.9 226.4c-9.1 3.7-14.2 8.6-18.1 17.3-3.1 6.7-3 17.8.1 25 2.9 6.6 11 14.3 17.6 16.9 4.9 1.9 9.7 1.9 188 1.9h183l5.5-2.6c14.2-6.8 21.8-22.7 17.7-37-3.2-10.9-11.8-19.7-22.3-22.7-3.1-.9-48.9-1.2-185-1.2H122.5l-5.6 2.4zM23.5 369.3c-6.2 2.1-9.7 4.2-13.8 8.4-12.9 12.8-12.2 33.5 1.5 45.8 5.6 5.1 11.3 7.4 20.1 8.1 6.7.6 8 .4 13.3-2 7.7-3.5 12.9-8.7 16.5-16.1 3.9-8.1 4.1-18.4.5-26.2-6.5-14-24.5-22.5-38.1-18zM119 369.3c-5.4 1.6-13.5 7.3-16.3 11.5-4.7 6.7-6.1 11.2-6 19.2 0 9.8 2.7 16.2 9.7 22.8 9.9 9.4-.2 8.7 126.1 8.7h111l5.5-2.6c22.4-10.6 25.3-41.2 5.3-55-8.9-6.2-3.5-5.9-122.7-5.8-74.3.1-110.2.4-112.6 1.2z" />
  </Svg>
);
