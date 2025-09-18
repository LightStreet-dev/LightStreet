import { useSwiper } from "swiper/react";
import s from "./SwiperNavigationComponent.module.css";
const SwiperNavigationComponent = () => {
  const swiper = useSwiper();
  if (!swiper) return null;
  return (
    <div className={s.swiperNavBtn}>
      <button className={s.swiperBtn} onClick={() => swiper.slidePrev()}>
      <img className={s.arrowSvg} src="/svg/arrow-left.svg"  alt="<" />
      </button>
      <button className={s.swiperBtn} onClick={() => swiper.slideNext()}>
       <img className={s.arrowSvg} src="/svg/arrow-right.svg"  alt=">" />
      </button>
    </div>
  );
};

export default SwiperNavigationComponent;
