import s from "./HeroTeamComponent.module.css";
import type { Review as ReviewType } from "../../../data/reviews";
import clsx from "clsx";

interface ReviewProps {
  review: ReviewType;
  index: number | null;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const HeroTeamComponent: React.FC<ReviewProps> = ({
  review,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const { photo } = review;
const isActive = activeIndex === index
  const handleClickRewiev = () => {
    setActiveIndex(index);
  };
  return (
    <div className={s.reviewWraper} onClick={handleClickRewiev}>
      <img className={clsx(s.reviewImg, isActive && s.activeImg)} src={photo} alt="Review" />
    </div>
  );
};

export default HeroTeamComponent;
