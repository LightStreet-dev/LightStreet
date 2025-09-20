import { useTranslation } from "react-i18next";
import s from "./OfersListComponent.module.css";
import OferComponent from "../OferComponent/OferComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import {Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperNavigationComponent from "./SwiperNavigationComponent";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import { useRef } from "react";


const OfersListComponent = () => {
  const { t } = useTranslation();
  const PCsize: boolean = useMediaQuery({ minWidth: 768 });
  const ofers = t("ofers", { returnObjects: true });

  // створюємо ref для кастомної пагінації
  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={s.oferSwiperWrapper}>
      <Swiper
        modules={[Keyboard, Navigation, Pagination]}
        className={s.oferSwiper}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
       onBeforeInit={(swiper) => {
  // важливо: тут ми "прив’язуємо" pagination до рефа
  // бо на момент першого рендеру paginationRef.current ще null
  if (swiper.params.pagination && typeof swiper.params.pagination !== "boolean") {
    swiper.params.pagination.el = paginationRef.current;
  }
}}

        centeredSlides={false}
        slidesPerView="auto"
        initialSlide={0}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 23,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {Object.entries(ofers).map(([key, value]) => (
          <SwiperSlide key={key} >
            {({ isActive }) => (
              <div
                className={clsx(
                  s.oferSlide,
                  isActive && PCsize && s.oferSlideActive
                )}
              >
                <OferComponent
                  isActive={isActive}
                  size={PCsize}
                  page={value}
                />
              </div>
            )}
          </SwiperSlide>
        ))}

       <div className={s.navWrapper}>
  <SwiperNavigationComponent type="prev" />

  <div ref={paginationRef} className={s.customPagination}></div>

  <SwiperNavigationComponent type="next" />
</div>
      </Swiper>
    </div>
  );
};

export default OfersListComponent;
