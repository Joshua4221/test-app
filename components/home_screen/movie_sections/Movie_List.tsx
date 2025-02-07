import { View, ScrollView, useWindowDimensions } from 'react-native';
import React from 'react';
import Movie_Details from './Movie_Details';
import { MovieSectionStyles } from '@/styles/home_styles/movie_section_styles';
import { MovieListType } from '@/types/home_types/movie_types';

const Movie_List = ({ list }: MovieListType) => {
  const { width } = useWindowDimensions();

  return (
    <View style={MovieSectionStyles.listWrapper}>
      <ScrollView
        style={[MovieSectionStyles.listContainer]}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {list?.map((movie, index) => (
          <View
            key={index}
            style={[MovieSectionStyles.cardWrapper, { width: width * 0.38 }]}
          >
            {Movie_Details({
              title: movie.title,
              genres: movie.genres,
              imageSource: movie.imageSource,
            })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Movie_List;
