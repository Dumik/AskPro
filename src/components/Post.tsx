import React, {FC, useState} from 'react';

import {LayoutChangeEvent, TouchableWithoutFeedback, View} from 'react-native';
import {Text} from '../legos';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {format} from 'date-fns';
import {theme} from '../utils';

type PostProps = {
  answer: string;
  response: string;
  likes: number;
  date: string;
};

export const Post: FC<PostProps> = ({answer, response, likes, date}) => {
  const isUseCollapsed = response.length <= 300;
  const [expanded, setExpanded] = useState(isUseCollapsed);
  const [height, setHeight] = useState(isUseCollapsed ? 120 : 100);
  const animatedHeight = useSharedValue(100);

  const onItemPress = () => {
    setExpanded(!expanded);
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const onLayoutHeight = event.nativeEvent.layout.height;

    if (onLayoutHeight > 0 && height !== onLayoutHeight) {
      setHeight(onLayoutHeight);
    }
  };

  const collapsableStyle = useAnimatedStyle(() => {
    animatedHeight.value = expanded ? withTiming(height) : withTiming(90);

    return {
      height: animatedHeight.value,
    };
  }, [expanded]);

  console.log(
    '%c jordan response',
    'color: lime;',
    response.length,
    isUseCollapsed,
  );
  return (
    <View style={{padding: 10}}>
      <Text style={{paddingVertical: 10, fontWeight: '700'}}>{answer}</Text>
      <Text
        style={{paddingBottom: 10, color: theme.colors.grayDark as string}}
        fontSize={10}>
        {format(new Date(date), 'dd/MMMM/yyyy')}
      </Text>
      <Animated.View style={[collapsableStyle, {overflow: 'hidden'}]}>
        <View style={{position: 'absolute'}} onLayout={onLayout}>
          <Text style={{fontSize: 12, textAlign: 'justify'}}>{response}</Text>
        </View>
      </Animated.View>
      {!expanded ? (
        <TouchableWithoutFeedback onPress={onItemPress}>
          <View style={{marginTop: 10}}>
            <Text fontSize={12}>Show More</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : null}
    </View>
  );
};
