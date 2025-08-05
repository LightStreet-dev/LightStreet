import s from "./ReviewsContainer.module.css";
import reviews from "../../data/reviews.ts";
import Review from "./Review.tsx";
import { useState } from "react";
import clsx from "clsx";

const ReviewsContainer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(() => Math.floor(Math.random() * reviews.length));

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
      <p className={clsx(s.reviewsText, activeIndex && s.reviewsTextActive)}>Our <br />reviews</p>
      </div>
      {activeReview && (
        <p className={s.reviewText}>
          {activeReview.text}
        </p>
      )}
    </div>
  );
};

export default ReviewsContainer;
