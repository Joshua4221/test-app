import { Hero_render_item_props } from './home_types/hero_types';

export type SingleStringType = { title: string };
export type SingleNumberType = { id: number };

export type AppButtonProps = {
  color: string;
  width: number;
  height: number;
  size: number;
  fontSize: number;
  onPress: () => void;
  backgroundColor: string;
  title: string;
};

export interface ViewTokenDetails {
  item: any;
  key: string;
  index: number | null;
  isViewable: boolean;
}

export interface Video extends Hero_render_item_props {
  id: string;
}

export interface VideoStore {
  currentVideo: Video | null;
  playbackPosition: number;
  isPlaying: boolean;
  setCurrentVideo: (video: Video) => void;
  setPlaybackPosition: (position: number) => void;
  //   setPlaybackPosition: (id: string, position: number) => void;
  setIsPlaying: (playing: boolean) => void;
  resetState: () => void;
}
