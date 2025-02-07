import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const ShortReelsStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  videoContainer: {
    width: '100%',
    height: '100%',
  },

  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  sidebar: {
    position: 'absolute',
    right: 10,
    bottom: 170,
    alignItems: 'center',
    gap: 20,
  },

  sidebarIcon: {
    alignItems: 'center',
    gap: 7,
  },

  sidebarText: {
    color: Colors.white,
  },

  bottomInfo: {
    position: 'absolute',
    bottom: 170,
    left: 10,
    right: 80,
    gap: 12.85,
  },

  usernameContainer: {
    gap: 5,
  },

  username: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
    flexShrink: 1,
  },

  description: {
    color: Colors.white,
    fontSize: 14,
    flexShrink: 1,
    fontWeight: '500',
  },
});
