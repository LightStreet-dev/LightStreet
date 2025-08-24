import s from "./HeroTemList.module.css";
import reviews from "../../../data/reviews.ts";

// Define the type for a review
interface ReviewType {
  id: string;
  text: string;
  // Add other fields as necessary
}
import Review from "../HeroTeamComponent/HeroTeamComponent.tsx";
import { useState } from "react";
import clsx from "clsx";

const HeroTemList: React.FC = () => {
        {reviews.map((review: ReviewType, index: number) => {

  const activeReview = activeIndex !== null ? reviews[activeIndex] : null;
  return (
    <div className={s.rewiewsWrapper}>
      <div className={s.wrapWithText}>
      <div className={s.reviewsContainer}>
        {reviews.map((review, index) => {
          return (
            <Review
              review={review}
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
