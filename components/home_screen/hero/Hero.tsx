import { FlatList, useWindowDimensions, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { HeroStyles } from '@/styles/home_styles/Hero_styles';
import Hero_wall from './Hero_wall';
import Hero_search from './Hero_search';
import Hero_bottom from './Hero_bottom';
import { Hero_render_item_props } from '@/types/home_types/hero_types';
import { Video } from 'expo-av';
import { Movie_Most_Trending_List } from '@/constants/data/Home';
import { router, useFocusEffect, useRouter } from 'expo-router';
import { useVideoStore } from '@/store/videoStore';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const { setCurrentVideo, setPlaybackPosition } = useVideoStore();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const flatListRef = useRef(null);
  const videoRefs = useRef<{ [key: number]: Video | null }>({});

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showVideo]);

  useFocusEffect(
    useCallback(() => {
      playVideo(currentIndex);

      return () => {
        pauseVideo(currentIndex);
      };
    }, [currentIndex])
  );

  const playVideo = async (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      await video.playAsync();
      setIsPlaying(true);
    }
  };

  const pauseVideo = async (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      await video.pauseAsync();
      setIsPlaying(false);
    }
  };

  const startVideo = async (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      await video.replayAsync();
      setIsPlaying(false);
    }
  };

  const handlePlayPress = async () => {
    if (videoRefs.current[currentIndex]) {
      const status = await videoRefs.current[currentIndex]?.getStatusAsync();
      const video = Movie_Most_Trending_List[currentIndex];
      setCurrentVideo(video);
      setPlaybackPosition(status?.positionMillis || 0);
      router.push('/(tabs)/short');

      // setTimeout(() => {
      //   flatListRef.current?.scrollToIndex({
      //     index: 4,
      //     animated: false, // Instant jump to avoid scrolling back
      //   });

      //   let video = videoRefs.current[4];

      //   video?.playAsync();
      // }, 500);
    }
  };

  // const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
  //   // setShowVideo(false);
  //   if (viewableItems.length > 0) {
  //     const newIndex = viewableItems[0].index;
  //     pauseVideo(currentIndex);
  //     setCurrentIndex(newIndex);

  //     // Show thumbnail for 3 seconds then play
  //     setTimeout(() => {
  //       playVideo(newIndex);
  //     }, 3000);
  //   }
  // });

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    setShowVideo(false);
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const renderItem = ({ item, index }: Hero_render_item_props) => {
    const isActive = index === currentIndex;

    return (
      <Hero_wall
        index={index}
        flatListRef={flatListRef}
        setCurrentIndex={setCurrentIndex}
        showVideo={showVideo}
        videoRef={videoRefs}
        videoSource={item?.uri}
        imageSource={item?.imageSource}
        isActive={isActive}
        currentIndex={currentIndex}
        totalItems={Movie_Most_Trending_List.length}
      />
    );
  };

  return (
    <View style={[HeroStyles.heroContainer, { height: height * 0.8, width }]}>
      <View
        style={[
          HeroStyles.heroWrapper,
          { width: '100%', borderWidth: 1, borderColor: 'red' },
        ]}
      >
        <FlatList
          ref={flatListRef}
          data={Movie_Most_Trending_List}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          pagingEnabled
          horizontal
          showsVerticalScrollIndicator={false}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
          onViewableItemsChanged={onViewableItemsChanged.current}
          snapToInterval={width}
          decelerationRate="fast"
        />

        <Hero_search />

        <Hero_bottom
          currentIndex={currentIndex}
          video={Movie_Most_Trending_List}
          playVideo={handlePlayPress}
        />
      </View>
    </View>
  );
};

export default Hero;
