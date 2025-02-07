import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Short_List from '@/components/short_screen/Short_List';
import { ShortReelsStyle } from '@/styles/short_styles/short_reels_style';

const Short = () => {
  return (
    <SafeAreaView style={ShortReelsStyle.container}>
      <Short_List />
    </SafeAreaView>
  );
};

export default Short;
