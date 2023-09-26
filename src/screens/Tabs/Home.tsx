import React, {FC} from 'react';

import {Text, Box} from '../../legos';
import {Header} from './Header';
import {ScreenProps} from '../types';

export const HomeScreen: FC<ScreenProps> = () => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      height="100%"
      backgroundColor="white">
      <Header />
      <Box>
        <Text>HOME SCREEN</Text>
      </Box>
    </Box>
  );
};
