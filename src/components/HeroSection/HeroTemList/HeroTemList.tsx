import s from "./HeroTemList.module.css";
import teamInfo from "../../../assets/data/teamData.ts";

import { useState } from "react";
import clsx from "clsx";
import HeroTeamComponent from "../HeroTeamComponent/HeroTeamComponent.tsx";

const HeroTemList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(() => Math.floor(Math.random() * teamInfo.length));

  const activeReview = activeIndex !== null ? teamInfo[activeIndex] : null;
  return (
    <div className={s.rewiewsWrapper}>
      <div className={s.wrapWithText}>
      <div className={s.reviewsContainer}>
        {teamInfo.map((review, index) => {
          return (
            <HeroTeamComponent
              teamText={review}
              key={review.id}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
        
      </div>
      <p className={clsx(s.reviewsText, activeIndex && s.reviewsTextActive)}>Our <br/> Team</p>
      </div>
      {activeReview && (
        <p className={s.reviewText}>
          {activeReview.text}
        </p>
      )}
    </div>
  );
};

export default HeroTemList;
