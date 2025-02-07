import { Text, View } from 'react-native';
import React, { Fragment } from 'react';
import { ShortReelsStyle } from '@/styles/short_styles/short_reels_style';
import { Short_Description_Type } from '@/types/short_types/short_reels_details_type';
import AppButton from '@/components/AppButton';
import { Colors } from '@/constants/Colors';
import VideoProgressBar from '../ProgressBar';

const Short_Description = ({
  username,
  description,
  status,
}: Short_Description_Type) => {
  return (
    <View style={ShortReelsStyle.bottomInfo}>
      <View style={ShortReelsStyle.usernameContainer}>
        <Text
          style={ShortReelsStyle.username}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {username}
        </Text>
        <Text
          style={ShortReelsStyle.description}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {description}
        </Text>
      </View>

      <AppButton
        color={Colors.white}
        width={203.68}
        height={40}
        size={18}
        fontSize={15.01}
        backgroundColor={Colors.Primary}
        onPress={() => {}}
        title="Watch Now"
      />

      <VideoProgressBar
        duration={status.durationMillis}
        currentTime={status.positionMillis}
      />
    </View>
  );
};

export default Short_Description;
