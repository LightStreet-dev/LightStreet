import PortfolioComponent from "./PortfolioComponent";
import s from "./PortfolioSectionCompopnent.module.css";
import portfolioDB from "../../assets/data/portfolioDB";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";
const PortfolioSectionCompopnent: React.FC = () => {
  return (
    <div className={s.portfolioSection}>
      <Swiper
        className={s.portfolioSlider}
        modules={[EffectCoverflow, Pagination]}
        spaceBetween={50}
        centeredSlides={true}
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {portfolioDB.map((item, idx) => {
          return (
            <SwiperSlide key={idx} className={s.slide}>
              <a href="">
                <PortfolioComponent webPage={item} />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PortfolioSectionCompopnent;
