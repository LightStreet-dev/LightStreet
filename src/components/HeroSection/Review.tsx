import s from './Review.module.css'
import type { Review as ReviewType } from '../../data/reviews';
interface ReviewProps {
  review: ReviewType;
}


const Review: React.FC<ReviewProps> = ({ review }) => {
    const { photo, text } = review;
  return (
    <div className={s.reviewWraper}>
        <img className={s.reviewImg} src={photo} alt="Review" />
        <p className={`hidden ${s.reviesText}` }>{text}</p>
    </div>
  );
};

export default Review