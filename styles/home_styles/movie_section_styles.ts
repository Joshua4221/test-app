import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const MovieSectionStyles = StyleSheet.create({
  containerWrapper: {
    height: 350,
    gap: 20,
  },

  continueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },

  continueText: {
    color: Colors.white,
    fontSize: 21,
    fontWeight: '600',
  },

  listWrapper: {
    height: '84%',
  },

  listContainer: {
    backgroundColor: Colors.black,
    paddingHorizontal: 2,
    height: '100%',
    width: '100%',
  },

  cardWrapper: {
    marginRight: 15,
    height: '100%',
  },

  cardContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    position: 'relative',
  },

  cardImage: {
    width: '100%',
    height: '78%',
    borderRadius: 20,
  },

  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    gap: 4,
  },

  cardGenres: {
    flexDirection: 'row',
  },

  cardGenreText: {
    color: Colors.Slate_Gray,
    fontSize: 11,
    fontWeight: '400',
  },

  cardTitle: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
    flexShrink: 1,
  },
});
