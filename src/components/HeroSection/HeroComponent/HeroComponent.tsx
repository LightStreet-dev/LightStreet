import s from "./HeroComponent.module.css";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroTemList from "../HeroTemList/HeroTemList";
import { useMediaQuery } from "react-responsive";
import HeroButton from "./HeroButton/HeroButton";
import HeroFeatures from "./HeroFeatures/HeroFeatures";


const HeroComponent: React.FC = () => {
  const showTeam = useMediaQuery({ minWidth: 768 });

  return (
    <div className="container">
      <div className={s.herroContainer}>
        <HeroTitle />
        {showTeam && <HeroTemList />}
      </div>
      <div className={s.heroWraper}>
      <HeroButton />
      {showTeam &&  <HeroFeatures/>}
    
      </div>
    </div>
  );
};

export default HeroComponent;
