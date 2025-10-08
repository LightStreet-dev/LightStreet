import s from "./PortfolioSwiper.module.css";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Pagination,
  Autoplay,

} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import SwiperNavigationComponent from "../OferSectionComponent/OfersListComponent/SwiperNavigationComponent";
import PortfolioCard from "./PortfolioCard";

const PortfolioSwiper = () => {
  const { t } = useTranslation();
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const portfolio = t("portfolio", { returnObjects: true });
  const portfolioEntries = Object.entries(portfolio);

  return (
    <div className={s.portfolioSwiperWrapper}>
      <Swiper
        modules={[Keyboard, Navigation, Pagination, Autoplay]}
        className={s.portfSwiper}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        initialSlide={2}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: -40,
          depth: 250,
          modifier: 1.5,
          slideShadows: false,
        }}
        keyboard={{ enabled: true }}
        breakpoints={{
          0: { slidesPerView: 'auto', spaceBetween: 15, centeredSlides: true },
          768: {slidesPerView: 'auto', spaceBetween: 23,centeredSlides: true },
          1024: { slidesPerView: 'auto', spaceBetween: 30, centeredSlides: true },
        }}
        pagination={{
          el: paginationRef.current ?? undefined,
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.pagination && typeof swiper.params.pagination !== "boolean") {
            swiper.params.pagination.el = paginationRef.current;
          }
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {portfolioEntries.map(([key, value], idx) => {
          const realActiveIndex = activeIndex % portfolioEntries.length;
          const isActive = realActiveIndex === idx;

          return (
            <SwiperSlide className={s.portfSlide} key={key + idx}>
              <div className={s.portfIteam}>
                <PortfolioCard portfolio={value} isActive={isActive} />
              </div>
            </SwiperSlide>
          );
        })}

        <div className={s.navWrapper}>
          <SwiperNavigationComponent type="prev" />
          <div ref={paginationRef} className={s.customPagination}></div>
          <SwiperNavigationComponent type="next" />
        </div>
      </Swiper>
    </div>
  );
};

export default PortfolioSwiper;
