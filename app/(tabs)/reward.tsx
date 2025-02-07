import React, { useState, useRef } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { IMAGES } from '@/constants/Image';
import { Colors } from '@/constants/Colors';
import { ShortReelsStyle } from '@/styles/short_styles/short_reels_style';
import { ViewableItemsType } from '@/types/short_types/short_reels_details_type';

const Short = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };

  const { height, width } = useWindowDimensions();

  const [focused, setFocused] = useState(false);

  // Sample video data structure
  const videos = [
    {
      id: '1',
      uri: require('../../assets/videos/Billionaire.bride.E1.mp4'),
      username: '@user1',
      description:
        'Video description here jkdjdjskskjjsd djkdsjskjhsd jksjdsjshkd #trending',
      likes: '126.5K',
      comments: '2,542',
      shares: '12.5K',
    },
    {
      id: '1',
      uri: require('../../assets/videos/Billionaire.bride.E2.mp4'),
      username: '@user1',
      description:
        'Video description here jkdjdjskskjjsd djkdsjskjhsd jksjdsjshkd #trending',
      likes: '126.5K',
      comments: '2,542',
      shares: '12.5K',
    },
    // Add more video objects here
  ];

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveVideoIndex(viewableItems[0].index);
    }
  });

  const renderVideo = ({ item, index }) => {
    const isActive = index === activeVideoIndex;

    return (
      <View style={[ShortReelsStyle.videoContainer, { width, height }]}>
        <Video
          source={item.uri}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode={ResizeMode.COVER}
          shouldPlay={isActive}
          isLooping
          style={ShortReelsStyle.video}
        />

        {/* Right sidebar */}
        <View style={ShortReelsStyle.sidebar}>
          <TouchableOpacity style={ShortReelsStyle.sidebarIcon}>
            <Image
              source={focused ? IMAGES.like_colored : IMAGES.like}
              style={{ width: 35, height: 35 }}
            />
            <Text style={ShortReelsStyle.sidebarText}>{item.likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ShortReelsStyle.sidebarIcon}>
            <Image source={IMAGES.comment} style={{ width: 35, height: 35 }} />
            <Text style={ShortReelsStyle.sidebarText}>{item.comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ShortReelsStyle.sidebarIcon}>
            <Image source={IMAGES.share} style={{ width: 35, height: 35 }} />
            <Text style={ShortReelsStyle.sidebarText}>{item.shares}</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom info */}
        <View style={ShortReelsStyle.bottomInfo}>
          <Text style={ShortReelsStyle.username}>{item.username}</Text>
          <Text style={ShortReelsStyle.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={ShortReelsStyle.container}>
      <FlatList
        data={videos}
        renderItem={renderVideo}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
        snapToInterval={height}
        decelerationRate="fast"
      />
    </SafeAreaView>
  );
};

export default Short;
