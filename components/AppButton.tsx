import { StyleSheet, Text, View } from 'react-native';
import React, { Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeroStyles } from '@/styles/home_styles/Hero_styles';
import { AppButtonProps } from '@/types/generalType';

const AppButton = ({
  color,
  width,
  height,
  size,
  fontSize,
  onPress,
  backgroundColor,
  title,
}: AppButtonProps) => {
  return (
    <Fragment>
      <TouchableOpacity
        onPress={onPress}
        style={[HeroStyles.playButton, { width, height, backgroundColor }]}
      >
        <Ionicons name="play" size={size} color={color} />
        <Text style={[HeroStyles.playText, { color, fontSize }]}>{title}</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
