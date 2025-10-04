import s from "./PortfolioSwiper.module.css";
import { useTranslation } from "react-i18next";
// import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperNavigationComponent from "../OferSectionComponent/OfersListComponent/SwiperNavigationComponent";


const PortfolioSwiper = () => {
  const { t } = useTranslation();
  // const PCsize: boolean = useMediaQuery({ minWidth: 768 });
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const portfolio = t("portfolio", { returnObjects: true });

  return <div className={s.portfolioSwiperWrapper}>
     <Swiper
     modules={[Keyboard, Navigation, Pagination, Autoplay]}
          className={s.portfSwiper}
      spaceBetween={5}
          centeredSlides={true}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
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
    >
      {Object.entries(portfolio).map(([key, value], idx) => (
        
          <SwiperSlide key={key+idx} ></SwiperSlide>))}
      
      
<div className={s.navWrapper}>
  <SwiperNavigationComponent type="prev" />

  <div ref={paginationRef} className={s.customPagination}></div>

  <SwiperNavigationComponent type="next" />
</div>
    </Swiper>
  </div>;
};

export default PortfolioSwiper;
