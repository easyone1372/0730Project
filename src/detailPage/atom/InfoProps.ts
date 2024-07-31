import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type InfoBtnProps = {
  content: string;
  clickEvent: () => void;
};

export type InfoContentProps = {
  content: string | number;
};

export type InfoDayDetailProps = {
  dayInfo: string;
  dayOpenTime: string;
  dayCloseTime: string;
  isClosed: boolean;
};

export type InfoDetailProps = {
  content: string;
  detailIcon: IconProp;
};

export type InfoMenuIngredientProps = {
  content: string[];
};

export type InfoMenuIngredientBoxProps = {
  menuContent: string[];
  menuText: string;
};

export type InfoMenuTextBoxProps = {
  menuDes: string;
  menuText: string | number;
  menuUnit?: string;
};

export type InfoReviewInputProps = {
  setComment: React.Dispatch<React.SetStateAction<string>>;
  reset?: boolean;
};
