import clsx from "clsx";
import s from "./PortfolioCard.module.css";
interface PortfolioPage {
  name: string;
  image: string;
  transcription: string;
}
interface Portfolio {
  portfolio: PortfolioPage;
  isActive: boolean;
}
const PortfolioCard: React.FC<Portfolio> = ({
  portfolio: { name, image, transcription },
  isActive,
}) => {
  return (
    <div>
      <div className={clsx(s.portfolioLink, isActive && s.portfolioLinkActive)}>
        <a href="">
          <img className={s.portfImg} src={image} alt="img" />
        </a>
        <p>{name}</p>
        <p>{transcription}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
