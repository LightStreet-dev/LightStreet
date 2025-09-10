import s from "./HeroFeatures.module.css";

const HeroFeatures: React.FC = () => {
  return (
    <ul className={s.featuresList}>
      <li className={s.featurIteam}>
        <div className={s.ratingWraper}>
          <p className={s.featurCount}>4.8</p>
          <img src="/svg/icon_star.svg" alt="star" className={s.ratingIcon} />
        </div>
        <p className={s.rating}> ocena</p>
        <p className={s.featurtext}>opierającsię o opinię naszych klientów</p>
      </li>
      <li className={s.featurIteam}>
        <p className={s.featurCount}>50+</p>
       
        <p className={s.featurtext}>wdrożonych stron</p>
      </li>
      <li className={s.featurIteam}>
        <p className={s.featurCount}>99%</p>
     
        <p className={s.featurtext}>naszych klientów nas poleca</p>
      </li>
    </ul>
  );
};

export default HeroFeatures;
