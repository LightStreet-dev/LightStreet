import { useTranslation } from "react-i18next";
import s from "./OfersListComponent.module.css";
import OferComponent from "../OferComponent/OferComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OfersListComponent = () => {
  const { t } = useTranslation();
  const ofers = t("ofers", { returnObjects: true });

  return (
    <div className={s.oferSwiperWrapper}>
      
      <Swiper
        modules={[Navigation, Pagination]}
        className={s.oferSwiper}   // можна додати стилі для ширини/висоти
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
           
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
      >
        {Object.entries(ofers).map(([key, value]) => (
          <SwiperSlide  key={key}>
            <div className={s.oferSlide}><OferComponent page={value} /></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfersListComponent;
