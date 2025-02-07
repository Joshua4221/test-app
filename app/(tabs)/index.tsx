import Hero from '@/components/home_screen/hero/Hero';
import Movies from '@/components/home_screen/movie_sections/Movies';
import { HomeContainerStyle } from '@/styles/home_styles/Home_container_styles';
import { ScrollView, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={HomeContainerStyle.container}>
      <ScrollView>
        <View>
          <Hero />

          <Movies />
        </View>
      </ScrollView>
    </View>
  );
}
