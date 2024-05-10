type TNeubrutalismButton = {
  type: "submit" | "button" | "reset";
  children: string;
  className?: string;
};

type TMealSearchParams = {
  dietType: string;
  cuisineType: string;
  mealType: string;
};

type TCarouselProps = {
  width?: number;
  height?: number;
  items: React.ReactNode[];
};

type TCarouselItem = {
  children?: React.ReactNode;
  index: number;
  activeIndex: number;
};
