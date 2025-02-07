import { FlashList } from '@shopify/flash-list';

export interface Hero_wall_props {
  showVideo: boolean;
  videoRef: React.RefObject<HTMLVideoElement> | any;
  videoSource: any; // Using `any` since require() returns a module
  imageSource: any; // Same as above for images
  uri?: string;
  username?: string;
  description?: string;
  likes?: string;
  comments?: string;
  shares?: string;
  views?: string;
  duration?: string;
}

export interface Hero_wall_props_extra extends Hero_wall_props {
  isActive: boolean;
  flatListRef: React.RefObject<FlashList<any>>;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  index: number;
  totalItems: number;
}

export interface Hero_render_item_props {
  item: Hero_wall_props;
  index: number;
  isActive?: boolean;
}
