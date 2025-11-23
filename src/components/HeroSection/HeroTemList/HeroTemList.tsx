import s from "./HeroTemList.module.css";
import getTeamInfo from "../../../assets/data/teamData.ts";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import HeroTeamComponent from "../HeroTeamComponent/HeroTeamComponent.tsx";

const HeroTemList: React.FC = () => {
  const { t } = useTranslation();

  // отримуємо команду з перекладом
  const teamInfo = getTeamInfo(t);

  const [activeIndex, setActiveIndex] = useState<number | null>(() =>
    Math.floor(Math.random() * teamInfo.length)
  );

  const activeReview = activeIndex !== null ? teamInfo[activeIndex] : null;

  return (
    <div className={s.rewiewsWrapper}>
      <div className={s.wrapWithText}>
        <div className={s.reviewsContainer}>
          {teamInfo.map((review, index) => (
            <HeroTeamComponent
              teamText={review}
              key={review.id}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

        <p className={clsx(s.reviewsText, activeIndex && s.reviewsTextActive)}>
          Our <br /> Team
        </p>
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
