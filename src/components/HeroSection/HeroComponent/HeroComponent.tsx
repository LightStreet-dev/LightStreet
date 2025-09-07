import s from "./HeroComponent.module.css";
import HeroTitle from "../HeroTitle/HeroTitle";

import HeroTemList from "../HeroTemList/HeroTemList";
import { useMediaQuery } from "react-responsive";

import HeroButton from "./HeroButton/HeroButton";
const HeroComponent: React.FC = () => {
  const showTeam = useMediaQuery({ minWidth: 768 });
  
  return (
    <div className={s.herroContainer}>
      <div className={s.titleWrap}>
        <HeroTitle />
        <HeroButton />
      </div>
      {showTeam && <HeroTemList />}
    </div>
  );
};

export default HeroComponent;
