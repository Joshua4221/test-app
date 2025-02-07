import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MovieSectionStyles } from '@/styles/home_styles/movie_section_styles';
import { Image } from 'expo-image';
import { MovieDetailsType } from '@/types/home_types/movie_types';

const Movie_Details = ({ title, genres, imageSource }: MovieDetailsType) => {
  return (
    <TouchableOpacity style={MovieSectionStyles.cardContainer}>
      <Image source={imageSource} style={MovieSectionStyles.cardImage} />

      <View style={MovieSectionStyles.cardContent}>
        <View style={MovieSectionStyles.cardGenres}>
          {genres.map((genre, index) => (
            <Text key={index} style={MovieSectionStyles.cardGenreText}>
              {genre}
            </Text>
          ))}
        </View>
        <Text
          style={MovieSectionStyles.cardTitle}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Movie_Details;
