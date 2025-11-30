import PortfolioComponent from "./PortfolioComponent";
import s from "./PortfolioSectionCompopnent.module.css";
import portfolioDB from "../../assets/data/portfolioDB";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { EffectCoverflow, Pagination, Keyboard } from "swiper/modules";
import SwiperNavigationComponent from "../OferSectionComponent/OfersListComponent/SwiperNavigationComponent";
import { useRef } from "react";

const PortfolioSectionCompopnent: React.FC = () => {
   const paginationPortfolioRef = useRef<HTMLDivElement | null>(null);
   const {t} = useTranslation()
  return (
    <div className={s.portfolioSection} >
      <div className="container" id="ourWorks">
        <h2 className={s.portfolioTitle}>{t("Portfolio.portfolio")}</h2>
      </div>
      <Swiper
       
        className={s.portfolioSlider}
        modules={[EffectCoverflow, Pagination, Keyboard]}
        spaceBetween={35}
        centeredSlides={true}
        effect="coverflow"
        grabCursor={true}
        loop={true}
        slidesPerView="auto"
        watchSlidesProgress={true}
         keyboard={{
          enabled: true,
        }}
          pagination={{
          el: `.${s.customPaginationProjects}`,
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        
      >
        {portfolioDB.map((item, idx) => (
          <SwiperSlide key={idx} className={s.slide}>
          
              <PortfolioComponent webPage={item} />
          
          </SwiperSlide>
        ))}
        <div className={s.navWrapper}>
  <SwiperNavigationComponent type="prev" />

  <div ref={paginationPortfolioRef} className={s.customPaginationProjects}></div>

  <SwiperNavigationComponent type="next" />
</div>
      </Swiper>
    </div>
  );
};

export default PortfolioSectionCompopnent;
