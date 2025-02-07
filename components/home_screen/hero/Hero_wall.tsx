import { useWindowDimensions, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { HeroStyles } from '@/styles/home_styles/Hero_styles';
import { Hero_wall_props_extra } from '@/types/home_types/hero_types';
import { ResizeMode, Video } from 'expo-av';

const Hero_wall = ({
  showVideo,
  videoRef,
  videoSource,
  imageSource,
  isActive,
  flatListRef,
  currentIndex,
  setCurrentIndex,
  index,
  totalItems,
}: Hero_wall_props_extra) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={[
        HeroStyles.heroImage,
        { borderWidth: 1, borderColor: 'red', width: width },
      ]}
    >
      {!showVideo ? (
        <Image source={imageSource} style={HeroStyles.heroImage} />
      ) : (
        <Video
          ref={(ref) => (videoRef.current[index] = ref)}
          source={videoSource}
          style={HeroStyles.video}
          resizeMode={ResizeMode.COVER}
          isMuted={true}
          shouldPlay={isActive}
          isLooping={true}
          usePoster={true}
          PosterComponent={() => (
            <Image source={imageSource} style={HeroStyles.heroImage} />
          )}
          // onPlaybackStatusUpdate={(status) => {
          //   if (status?.didJustFinish) {
          //     if (flatListRef?.current) {
          //       try {
          //         flatListRef.current.scrollToIndex({
          //           index: currentIndex < totalItems - 1 ? currentIndex + 1 : 0, // Ensure a valid index
          //           animated: true,
          //         });

          //         setCurrentIndex(currentIndex + 1);
          //       } catch (error) {
          //         console.warn('Error scrolling to next index:', error);
          //       }
          //     }
          //   }
          // }}

          onPlaybackStatusUpdate={(status) => {
            if (status?.didJustFinish) {
              if (flatListRef?.current) {
                try {
                  const nextIndex = currentIndex + 1;

                  if (nextIndex < totalItems) {
                    // Normal scrolling to the next item
                    flatListRef.current.scrollToIndex({
                      index: nextIndex,
                      animated: true,
                    });
                    setCurrentIndex(nextIndex);
                  } else {
                    // Instantly jump back to the first item without animation
                    setTimeout(() => {
                      flatListRef.current?.scrollToIndex({
                        index: 0,
                        animated: false, // Instant jump to avoid scrolling back
                      });
                      setCurrentIndex(0);
                    }, 500); // Small delay to avoid flickering
                  }
                } catch (error) {
                  console.warn('Error scrolling to next index:', error);
                }
              }
            }
          }}
        />
      )}
    </View>
  );
};

export default Hero_wall;
