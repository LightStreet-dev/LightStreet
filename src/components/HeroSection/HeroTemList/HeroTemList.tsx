import s from "./HeroTemList.module.css";
import getTeamInfo from "../../../assets/data/teamData.ts";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import HeroTeamComponent from "../HeroTeamComponent/HeroTeamComponent.tsx";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import {teamAnimation} from "../../animation/heroAnimation.ts"

const HeroTemList: React.FC = () => {
  const { t } = useTranslation();
  const teamPicture = useRef<HTMLDivElement | null>(null);
  const teamText = useRef<HTMLDivElement | null>(null);
  const team = useRef<HTMLDivElement | null>(null);

useGSAP(()=>{
teamAnimation()
})


  const teamInfo = getTeamInfo(t);

  const [activeIndex, setActiveIndex] = useState<number | null>(() =>
    Math.floor(Math.random() * teamInfo.length)
  );

  const activeReview = activeIndex !== null ? teamInfo[activeIndex] : null;

  return (
    <div className={s.rewiewsWrapper}>
      <div className={s.wrapWithText}>
        <div className={s.reviewsContainer} ref={teamPicture}>
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

        <p className={clsx(s.reviewsText, activeIndex && s.reviewsTextActive)} ref={team}>
          Our <br /> Team
        </p>
      </div >

      {activeReview && <p ref={teamText} className={s.reviewText}>{activeReview.text}</p>}
    </div>
  );
};

export default HeroTemList;
