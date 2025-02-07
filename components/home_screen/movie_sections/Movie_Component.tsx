import { View } from 'react-native';
import React from 'react';
import Movie_List from './Movie_List';
import Movie_Header from './Movie_Header';
import { MovieComponentType } from '@/types/home_types/movie_types';
import { MovieSectionStyles } from '@/styles/home_styles/movie_section_styles';
import Movie_Category_list from './Movie_Category_list';

const Movie_Component = ({
  list,
  title,
  height = 350,
  category = false,
  list_category,
}: MovieComponentType) => {
  return (
    <View style={[MovieSectionStyles.containerWrapper, { height }]}>
      <Movie_Header title={title} />

      {!category ? (
        <Movie_List list={list} />
      ) : (
        <Movie_Category_list list={list_category} />
      )}
    </View>
  );
};

export default Movie_Component;
