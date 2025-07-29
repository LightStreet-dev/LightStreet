import s from "./ReviewsContainer.module.css";
import reviews from "../../data/reviews.ts";
import Review from "./Review.tsx";


const ReviewsContainer: React.FC = () => {
  return (
    <div className={s.reviewsContainer}>
      {reviews.map((review) => {
        return  <Review review={review} key={review.id} />;
      })}
    </div>
  );
};

export default ReviewsContainer;
