import { useWindowDimensions, View } from 'react-native';
import React, { useState } from 'react';
import { ShortReelsStyle } from '@/styles/short_styles/short_reels_style';
import { ResizeMode, Video } from 'expo-av';
import Short_Socials from './Short_Socials';
import { ShortReelDetailsType } from '@/types/short_types/short_reels_details_type';
import Short_Description from './Short_Description';
import { VIDEOS } from '@/constants/Video';
import { Image } from 'expo-image';

const Short_Details = ({
  item,
  index,
  isActive,
  videoRefs,
  setStatus,
  status,
}: ShortReelDetailsType) => {
  const [focused, setFocused] = useState(false);
  const { width, height } = useWindowDimensions();

  return (
    <View
      key={index}
      style={[ShortReelsStyle.videoContainer, { width, height }]}
    >
      <Video
        ref={(ref) => (videoRefs.current[index] = ref)}
        source={typeof item?.uri === 'string' ? { uri: item?.uri } : item?.uri}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={ResizeMode.COVER}
        shouldPlay={isActive}
        isLooping
        style={ShortReelsStyle.video}
        usePoster={true}
        PosterComponent={() => (
          <Image source={item?.imageSource} style={ShortReelsStyle.video} />
        )}
        onPlaybackStatusUpdate={(status) => {
          if (status.isLoaded && isActive) {
            setStatus({
              positionMillis: status?.positionMillis || 0,
              durationMillis: status?.durationMillis || 0,
            });
          }
        }}
      />

      <Short_Socials
        likes={item?.likes}
        comments={item?.comments}
        shares={item?.shares}
        focused={focused}
      />

      <Short_Description
        username={item?.username}
        description={item?.description}
        status={status}
      />
    </View>
  );
};

export default Short_Details;
