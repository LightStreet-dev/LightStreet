import s from "./PortfolioSection.module.css";
import PortfolioSwiper from "./PortfolioSwiper";

const PortfolioSection: React.FC = () => {
  return (
    <div className="container">
      <div>
        <h2 className={s.portfolioTitle}>Portfolio</h2>
      </div>
      <div className={s.portfolioSwiper}>
        <PortfolioSwiper />
      </div>
    </div>
  );
};

export default PortfolioSection;
