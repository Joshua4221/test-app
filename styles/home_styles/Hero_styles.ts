import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const HeroStyles = StyleSheet.create({
  heroContainer: {
    position: 'relative',
  },

  heroWrapper: {
    flex: 0.95,
  },

  heroImage: {
    width: '100%',
    height: '100%',
  },

  video: {
    width: '100%',
    height: '100%',
  },

  searchButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 8,
  },

  contentContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // padding: 20,
  },

  contentContainerWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  tag: {
    backgroundColor: Colors.sub_main_secondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.Secondary,
  },

  tagText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '400',
  },

  playButton: {
    height: 44,
    width: 149,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 2,
  },

  playText: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.black,
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },
});
