import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const Movie_Category_List_Style = StyleSheet.create({
  container: {
    // backgroundColor: Colors.black,
  },

  scrollContent: {
    paddingHorizontal: 2,
    gap: 12,
  },

  categoryCard: {
    height: 80,
    borderRadius: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingVertical: 12,
  },

  categoryText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
