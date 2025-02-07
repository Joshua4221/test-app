import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Movie_Category_List_Style } from '@/styles/home_styles/movie_category_list_style';
import { movie_categories } from '@/constants/data/Home';
import { MovieCategoryListType } from '@/types/home_types/movie_types';

const Movie_Category_list = ({ list }: MovieCategoryListType) => {
  const { width } = useWindowDimensions();

  return (
    <View style={Movie_Category_List_Style.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Movie_Category_List_Style.scrollContent}
      >
        {list?.map((category) => (
          <TouchableOpacity key={category.id} activeOpacity={0.7}>
            <LinearGradient
              colors={category.colors as [string, string, ...string[]]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[
                Movie_Category_List_Style.categoryCard,
                { width: width * 0.38 },
              ]}
            >
              <Text style={Movie_Category_List_Style.categoryText}>
                {category.name}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Movie_Category_list;
