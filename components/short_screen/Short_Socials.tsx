import { Text, TouchableOpacity, View } from 'react-native';
import React, { Fragment } from 'react';
import { ShortReelsStyle } from '@/styles/short_styles/short_reels_style';
import { Image } from 'expo-image';
import { IMAGES } from '@/constants/Image';
import { Short_Socials_Type } from '@/types/short_types/short_reels_details_type';

const Short_Socials = ({
  likes,
  comments,
  shares,
  focused,
}: Short_Socials_Type) => {
  return (
    <Fragment>
      <View style={ShortReelsStyle.sidebar}>
        <TouchableOpacity style={ShortReelsStyle.sidebarIcon}>
          <Image
            source={focused ? IMAGES.like_colored : IMAGES.like}
            style={{ width: 35, height: 35 }}
          />
          <Text style={ShortReelsStyle.sidebarText}>{likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ShortReelsStyle.sidebarIcon}>
          <Image source={IMAGES.comment} style={{ width: 35, height: 35 }} />
          <Text style={ShortReelsStyle.sidebarText}>{comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ShortReelsStyle.sidebarIcon}>
          <Image source={IMAGES.share} style={{ width: 35, height: 35 }} />
          <Text style={ShortReelsStyle.sidebarText}>{shares}</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Short_Socials;
