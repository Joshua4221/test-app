export interface ShortReelType {
  id: string;
  uri: any; // Since `require()` is used, `any` is needed (React Native handles assets differently)
  username: string;
  description: string;
  likes: string;
  comments: string;
  shares: string;
  imageSource: any;
}

export type ViewableItemsType = { viewableItems: { index: number }[] };

export type ShortReelDetailsType = {
  item: ShortReelType;
  index: number;
  isActive: boolean;
  videoRefs: React.RefObject<HTMLVideoElement> | any;
  setStatus: (status: {
    positionMillis: number;
    durationMillis: number;
  }) => void;
  status: {
    positionMillis: number;
    durationMillis: number;
  };
};

export interface Short_Socials_Type {
  likes: string;
  comments: string;
  shares: string;
  focused?: boolean;
}

export interface Short_Description_Type {
  username: string;
  description: string;
  status: {
    positionMillis: number;
    durationMillis: number;
  };
}
