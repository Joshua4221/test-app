import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HeroStyles } from '@/styles/home_styles/Hero_styles';

const Hero_search = () => {
  return (
    <View style={HeroStyles.searchButton}>
      <TouchableOpacity>
        <Ionicons name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Hero_search;
