import { FlatList, SectionList, useWindowDimensions } from 'react-native';
import React, { useState, useRef, Fragment, useMemo, useEffect } from 'react';
import { short_reels } from '@/constants/data/Short';
import Short_Details from './Short_Details';
import { ShortReelDetailsType } from '@/types/short_types/short_reels_details_type';
import { Video } from 'expo-av';
import { All_Videos_Group } from '@/constants/data/GeneralData';
import { useVideoStore } from '@/store/videoStore';
import VideoProgressBar from '../ProgressBar';

const Short_List = () => {
  const { currentVideo, playbackPosition, setIsPlaying } = useVideoStore();

  console.log(currentVideo, playbackPosition, 'joshua');

  const { height } = useWindowDimensions();

  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };

  const [status, setStatus] = useState({
    positionMillis: 0,
    durationMillis: 0,
  });

  const videoRefs = useRef<{ [key: number]: Video | null }>({});

  const flatListRef = useRef(null);

  //   useEffect(() => {
  //     if (currentVideo) {
  //       const loadVideo = async () => {
  //         if (videoRefs.current) {
  //           await videoRefs.current.loadAsync(
  //             { uri: currentVideo.url },
  //             { positionMillis: playbackPosition },
  //             false
  //           );
  //           await videoRefs.current.playAsync();
  //           setIsPlaying(true);
  //         }
  //       };

  //       loadVideo();
  //     }

  //     return () => {
  //       if (videoRefs.current) {
  //         videoRefs.current.unloadAsync();
  //       }
  //     };
  //   }, [currentVideo?.id]);

  //   useEffect(() => {
  //     if (currentVideo) {
  //       const loadVideo = async () => {
  //         if (videoRefs.current) {
  //           try {
  //             // await videoRefs.current[currentVideo?.id - 1].loadAsync(
  //             //   { uri: currentVideo.url },
  //             //   { positionMillis: playbackPosition, shouldPlay: true },
  //             //   false
  //             // );
  //             // setIsPlaying(true);

  //             setTimeout(async () => {
  //               flatListRef.current?.scrollToIndex({
  //                 index: currentVideo?.id - 1,
  //                 animated: false, // Instant jump to avoid scrolling back
  //               });

  //               let video = videoRefs.current[currentVideo?.id - 1];

  //               await video?.loadAsync(
  //                 { uri: currentVideo.uri },
  //                 { positionMillis: playbackPosition, shouldPlay: true },
  //                 false
  //               );

  //               video?.playAsync();
  //             }, 500);
  //           } catch (error) {
  //             console.error('Error loading video:', error);
  //           }
  //         }
  //       };

  //       // Ensure videoRef.current is available before loading
  //       const interval = setInterval(() => {
  //         if (videoRefs.current) {
  //           clearInterval(interval);
  //           loadVideo();
  //         }
  //       }, 100); // Check every 100ms

  //       return () => {
  //         clearInterval(interval);
  //         videoRefs.current[currentVideo?.id - 1]?.unloadAsync();
  //       };
  //     }
  //   }, [currentVideo?.id]);

  //   useEffect(() => {
  //     if (currentVideo?.id) {
  //       const loadVideo = async () => {
  //         if (videoRefs.current) {
  //           try {
  //             const savedPosition = lastPlayedPosition[currentVideo?.id] || 0;

  //             setTimeout(async () => {
  //               // Scroll to correct index
  //               flatListRef.current?.scrollToIndex({
  //                 index: parseInt(currentVideo?.id) - 1,
  //                 animated: false,
  //               });

  //               const video = videoRefs.current[currentVideo?.id];
  //               if (video) {
  //                 // Load video at saved position
  //                 await video.loadAsync(
  //                   { uri: currentVideo.uri },
  //                   {
  //                     positionMillis: savedPosition,
  //                     shouldPlay: true,
  //                   },
  //                   false
  //                 );

  //                 // Start playback
  //                 await video.playAsync();

  //                 // Set up position tracking
  //                 video.setOnPlaybackStatusUpdate((status) => {
  //                   if (status.isLoaded && !status.didJustFinish) {
  //                     setPlaybackPosition(
  //                       currentVideo?.id,
  //                       status.positionMillis
  //                     );
  //                   }
  //                 });
  //               }
  //             }, 500);
  //           } catch (error) {
  //             console.error('Error loading video:', error);
  //           }
  //         }
  //       };

  //       // Wait for refs to be available
  //       const interval = setInterval(() => {
  //         if (videoRefs.current) {
  //           clearInterval(interval);
  //           loadVideo();
  //         }
  //       }, 100);

  //       return () => {
  //         clearInterval(interval);
  //         // Save position before unmounting
  //         const video = videoRefs.current[currentVideo?.id];
  //         if (video) {
  //           video.getStatusAsync().then((status) => {
  //             if (status.isLoaded) {
  //               setPlaybackPosition(currentVideo?.id, status.positionMillis);
  //             }
  //           });
  //           video.unloadAsync();
  //         }
  //       };
  //     }
  //   }, [currentVideo?.id]);

  useEffect(() => {
    if (currentVideo) {
      const resumeVideo = async () => {
        if (videoRefs.current) {
          try {
            setTimeout(async () => {
              // Scroll to the correct video
              flatListRef.current?.scrollToIndex({
                index: currentVideo.id - 1,
                animated: false, // Instant jump
              });

              let video = videoRefs.current[currentVideo.id - 1];

              console.log(video, 'video');

              if (video) {
                // Seek to saved position instead of reloading
                await video.setPositionAsync(playbackPosition);
                await video.playAsync();
                setIsPlaying(true);
              }
            }, 500);
          } catch (error) {
            console.error('Error resuming video:', error);
          }
        }
      };

      // Wait until videoRefs.current is ready
      const interval = setInterval(() => {
        if (videoRefs.current) {
          clearInterval(interval);
          resumeVideo();
        }
      }, 100); // Check every 100ms

      return () => {
        clearInterval(interval);
        // Do not unload the video; just pause
        videoRefs.current[currentVideo.id - 1]?.pauseAsync();
      };
    }
  }, [currentVideo?.id]);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveVideoIndex(viewableItems[0].index);
    }
  });

  //   useMemo(() => {
  //     if (videoRefs.current) {
  //       videoRefs.current.playAsync();
  //     } else {
  //       videoRefs.current?.stopAsync();
  //     }
  //   }, [videoRefs.current]);

  const renderVideo = ({ item, index }: ShortReelDetailsType) => {
    const isActive = index === activeVideoIndex;

    return (
      <Short_Details
        item={item}
        index={index}
        isActive={isActive}
        videoRefs={videoRefs}
        setStatus={setStatus}
        status={status}
      />
    );
  };

  return (
    <Fragment>
      <FlatList
        ref={flatListRef}
        data={All_Videos_Group}
        renderItem={renderVideo}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
        snapToInterval={height}
        decelerationRate="fast"
      />
    </Fragment>
  );
};

export default Short_List;
