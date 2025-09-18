import { useSwiper } from "swiper/react";
import s from "./SwiperNavigationComponent.module.css";
import { useEffect, useState } from "react";
import clsx from "clsx";

const SwiperNavigationComponent = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiper) return;

    // виставляємо початковий стан
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    // слухач оновлення
    const handleUpdate = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleUpdate);

    return () => {
      swiper.off("slideChange", handleUpdate);
    };
  }, [swiper]);

  if (!swiper) return null;

  return (
    <div className={s.swiperNavBtn}>
      <button
      className={clsx(s.swiperBtn, isBeginning && s.swiperBtnDisabled)}
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning} // 🚫 не активна на першому слайді
      >
        <img className={s.arrowSvg} src="/svg/arrow-left.svg" alt="Назад" />
      </button>

      <button
        className={clsx(s.swiperBtn, isEnd && s.swiperBtnDisabled)}
        onClick={() => swiper.slideNext()}
        disabled={isEnd} // 🚫 не активна на останньому слайді
      >
        <img   className={s.arrowSvg} src="/svg/arrow-right.svg" alt="Далі" />
      </button>
    </div>
  );
};

export default SwiperNavigationComponent;
