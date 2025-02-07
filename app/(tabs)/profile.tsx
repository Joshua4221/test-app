import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>
      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{' '}
          and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <ThemedText type="defaultSemiBold">w</ThemedText>{' '}
          in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the{' '}
          <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
          provide files for different screen densities
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>{' '}
          to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook
          lets you inspect what the user's current color scheme is, and so you
          can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">
            components/HelloWave.tsx
          </ThemedText>{' '}
          component uses the powerful{' '}
          <ThemedText type="defaultSemiBold">
            react-native-reanimated
          </ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The{' '}
              <ThemedText type="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

// import { FlatList, SectionList, useWindowDimensions, View } from 'react-native';
// import React, { useEffect, useRef, useState } from 'react';
// import { HeroStyles } from '@/styles/home_styles/Hero_styles';
// import Hero_wall from './Hero_wall';
// import Hero_search from './Hero_search';
// import Hero_bottom from './Hero_bottom';
// import { VIDEOS } from '@/constants/Video';
// import { IMAGES } from '@/constants/Image';
// import { All_Videos_Group } from '@/constants/data/GeneralData';
// import { FlashList } from '@shopify/flash-list';
// import { Hero_render_item_props } from '@/types/home_types/hero_types';
// import { Video } from 'expo-av';

// const Hero = () => {
//   const videoRef = useRef(null);
//   const [showVideo, setShowVideo] = useState(false);

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const flatListRef = useRef(null);
//   const videoRefs = useRef<{ [key: string]: Video }>({});

//   const { height, width } = useWindowDimensions();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowVideo(true);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, [showVideo]);

//   // useEffect(() => {
//   //   const focusListener = navigation.addListener('focus', () => {
//   //     playVideo(currentIndex);
//   //   });

//   //   const blurListener = navigation.addListener('blur', () => {
//   //     pauseVideo(currentIndex);
//   //   });

//   //   return () => {
//   //     focusListener.remove();
//   //     blurListener.remove();
//   //   };
//   // }, [currentIndex]);

//   const playVideo = async (index: number) => {
//     const video = videoRefs.current[index];
//     if (video) {
//       await video.playAsync();
//       setIsPlaying(true);
//     }
//   };

//   const pauseVideo = async (index: number) => {
//     const video = videoRefs.current[index];
//     if (video) {
//       await video.pauseAsync();
//       setIsPlaying(false);
//     }
//   };

//   const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
//     if (viewableItems.length > 0) {
//       const newIndex = viewableItems[0].index;
//       pauseVideo(currentIndex);
//       setCurrentIndex(newIndex);

//       // Show thumbnail for 3 seconds then play
//       setTimeout(() => {
//         playVideo(newIndex);
//       }, 3000);
//     }
//   });

//   // const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
//   //   if (viewableItems.length > 0) {
//   //     setCurrentIndex(viewableItems[0].index);
//   //   }
//   // });

//   const renderItem = ({ item, index }: Hero_render_item_props) => {
//     const isActive = index === currentIndex;

//     return (
//       <Hero_wall
//         showVideo={showVideo}
//         videoRef={videoRef}
//         videoSource={item?.uri}
//         imageSource={item.imageSource}
//         isActive={isActive}
//       />
//     );
//   };

//   return (
//     <View style={[HeroStyles.heroContainer, { height: height * 0.8, width }]}>
//       <View
//         style={[
//           HeroStyles.heroWrapper,
//           { width: '100%', borderWidth: 1, borderColor: 'red' },
//         ]}
//       >
//         {/* <SectionList
//           sections={All_Videos_Group}
//           keyExtractor={(item, index) => item.id + index}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           viewabilityConfig={{
//             itemVisiblePercentThreshold: 50,
//           }}
//           onViewableItemsChanged={onViewableItemsChanged.current}
//           renderItem={({ item }) => (
//             <Hero_wall
//               showVideo={showVideo}
//               videoRef={videoRef}
//               videoSource={item?.uri}
//               imageSource={item.imageSource}
//             />
//           )}
//         /> */}

//         {/* <FlatList
//           ref={flatListRef}
//           data={All_Videos_Group[0].data}
//           renderItem={({ item }) => (
//             <Hero_wall
//               showVideo={showVideo}
//               videoRef={videoRef}
//               videoSource={item?.uri}
//               imageSource={item.imageSource}
//             />
//           )}
//           pagingEnabled
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           onViewableItemsChanged={onViewableItemsChanged.current}
//           viewabilityConfig={{
//             itemVisiblePercentThreshold: 50,
//           }}
//         /> */}

//         <FlashList
//           ref={flatListRef}
//           data={All_Videos_Group[0].data}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           viewabilityConfig={{
//             itemVisiblePercentThreshold: 50,
//           }}
//           pagingEnabled
//           renderItem={({ item, index }) => {
//             const isActive = index === currentIndex;

//             return (
//               <Hero_wall
//                 showVideo={showVideo}
//                 videoRef={videoRef}
//                 videoSource={item?.uri}
//                 imageSource={item.imageSource}
//                 isActive={isActive}
//                 flatListRef={flatListRef}
//                 currentIndex={currentIndex}
//               />
//             );
//           }}
//           onViewableItemsChanged={onViewableItemsChanged.current}
//         />

//         {/* <FlashList
//           data={All_Videos_Group[0].data}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           viewabilityConfig={{
//             itemVisiblePercentThreshold: 50,
//           }}
//           pagingEnabled
//           renderItem={renderItem}
//           onViewableItemsChanged={onViewableItemsChanged.current}
//         /> */}

//         {/* <Hero_wall
//           showVideo={showVideo}
//           videoRef={videoRef}
//           videoSource={VIDEOS.short_video_one}
//           imageSource={IMAGES.slide_one}
//         /> */}

//         <Hero_search />

//         <Hero_bottom />
//       </View>
//     </View>
//   );
// };

// export default Hero;
