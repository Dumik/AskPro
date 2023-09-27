import React, {FC, useState} from 'react';

import {
  Dimensions,
  Image,
  LayoutChangeEvent,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Box, Text} from '../../legos';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {format} from 'date-fns';

import {LikeButton} from '../../legos/LikeButton';
import {
  BottomContainer,
  Container,
  DateText,
  HeaderText,
  ShowMoreText,
} from './styled';

type PostProps = {
  answer: string;
  response: string;
  likes: number;
  date: string;
  author?: string;
  image?: string;
  asker?: string;
};

export const Post: FC<PostProps> = ({
  answer,
  response,
  likes = 0,
  date,
  author,
  asker,
  image,
}) => {
  const isUseCollapsed = response.length <= 300;
  const [isLiked, setIsLiked] = useState(false);
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

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const win = Dimensions.get('window');
  const ratio = win.width / 341;

  return (
    <Container>
      <Box flexDirection="row" alignItems="center">
        <HeaderText>
          {answer}{' '}
          <Text
            fontSize={14}
            color="grayDark"
            fontWeight={400}
            style={{
              paddingLeft: 8,
            }}>
            {asker}
          </Text>
        </HeaderText>
      </Box>
      <DateText>{format(new Date(date), 'dd MMMM yyyy')}</DateText>
      <Animated.View style={[collapsableStyle, {overflow: 'hidden'}]}>
        <View style={{position: 'absolute'}} onLayout={onLayout}>
          <Text textAlign="justify" fontSize={12}>
            {response}
          </Text>
        </View>
      </Animated.View>
      {!expanded ? (
        <TouchableWithoutFeedback onPress={onItemPress}>
          <View>
            <ShowMoreText>Show More</ShowMoreText>
          </View>
        </TouchableWithoutFeedback>
      ) : null}
      {image ? (
        <Box
          style={{
            marginTop: 20,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: image}}
            style={{
              width: win.width,
              height: 362 * ratio,
            }}
          />
        </Box>
      ) : null}

      <BottomContainer>
        <Text color="blue" fontSize={12} fontWeight={700}>
          {author}
        </Text>
        <LikeButton
          onPress={handleLike}
          isLiked={isLiked}
          likeCount={isLiked ? likes + 1 : likes}
        />
      </BottomContainer>
    </Container>
  );
};
