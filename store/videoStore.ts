import { Video, VideoStore } from '@/types/generalType';
import { create } from 'zustand';

export const useVideoStore = create<VideoStore>((set) => ({
  currentVideo: null,
  playbackPosition: 0,
  isPlaying: false,
  setCurrentVideo: (video: Video) => set({ currentVideo: video }),
  setPlaybackPosition: (position) => set({ playbackPosition: position }),
  //   setPlaybackPosition: (id, position) =>
  //     set((state) => ({
  //       lastPlayedPosition: {
  //         ...state.lastPlayedPosition,
  //         [id]: position,
  //       },
  //     })),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  resetState: () =>
    set({ currentVideo: null, playbackPosition: 0, isPlaying: false }),
}));
