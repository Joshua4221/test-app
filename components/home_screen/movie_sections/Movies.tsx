import { View } from 'react-native';
import React from 'react';
import {
  movie_categories,
  Movie_Continue_Watch_List,
  Movie_Documentary_List,
  Movie_Drama_List,
  Movie_For_You_List,
  Movie_Most_Trending_List,
  Movie_Romance_List,
} from '@/constants/data/Home';
import Movie_Component from './Movie_Component';

const Movies = () => {
  return (
    <View style={{ gap: 35, paddingBottom: 120 }}>
      <Movie_Component
        list={Movie_Continue_Watch_List}
        title="Continue watching"
        height={285}
      />

      <Movie_Component list={Movie_Most_Trending_List} title="Most Trending" />

      <Movie_Component
        list_category={movie_categories}
        title="By category"
        category
        height={125}
      />

      <Movie_Component list={Movie_For_You_List} title="For you" />

      <Movie_Component list={Movie_Drama_List} title="Drama" />

      <Movie_Component list={Movie_Romance_List} title="Romance" />

      <Movie_Component list={Movie_Documentary_List} title="Documentary" />
    </View>
  );
};

export default Movies;
