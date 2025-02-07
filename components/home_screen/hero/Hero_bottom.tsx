import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { HeroStyles } from '@/styles/home_styles/Hero_styles';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import AppButton from '@/components/AppButton';

const Hero_bottom = ({
  currentIndex,
  video,
  playVideo,
}: {
  currentIndex: number;
  video: any;
  playVideo: () => void;
}) => {
  const renderPaginationDots = () => {
    return (
      <View style={HeroStyles.pagination}>
        {video?.map((_, i) => (
          <View
            key={i}
            style={[
              HeroStyles.dot,
              { width: i === currentIndex ? 15 : 6 },
              {
                backgroundColor:
                  i === currentIndex ? Colors.Primary : Colors.sub_secondary,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={HeroStyles.contentContainer}>
      <View style={HeroStyles.contentContainerWrapper}>
        <View style={HeroStyles.tagContainer}>
          {['New', 'Detective', 'Crime'].map((tag, index) => (
            <View key={index} style={HeroStyles.tag}>
              <Text style={HeroStyles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        <AppButton
          color={Colors.black}
          width={149}
          height={44}
          size={20}
          fontSize={17}
          backgroundColor={Colors.white}
          title="Play"
          onPress={playVideo}
        />

        {renderPaginationDots()}
      </View>
    </View>
  );
};

export default Hero_bottom;
