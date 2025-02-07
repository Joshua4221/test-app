import { Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MovieSectionStyles } from '@/styles/home_styles/movie_section_styles';
import { SingleStringType } from '@/types/generalType';
import { Colors } from '@/constants/Colors';

const Movie_Header = ({ title }: SingleStringType) => {
  return (
    <View style={MovieSectionStyles.continueContainer}>
      <Text style={MovieSectionStyles.continueText}>{title}</Text>
      <Ionicons name="chevron-forward" size={24} color={Colors.white} />
    </View>
  );
};

export default Movie_Header;
