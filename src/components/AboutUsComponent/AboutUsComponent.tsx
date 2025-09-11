import { useMediaQuery } from "react-responsive";
import s from "./AboutUsComponent.module.css";
import HeroTemList from "../HeroSection/HeroTemList/HeroTemList";

const AboutUsComponent: React.FC = () => {
    const teamVisible = useMediaQuery({maxWidth:768})
  return (
    <div className={s.aboutUs}>
      <div className="container">
        <h2 className={s.aboutUsTitle}>O nas</h2>
        <ul className={s.aboutUsWrapper}>
          <li>
            <p className={s.aboutUsText}>
              Jesteśmy doświadczonym studiem projektowym, które tworzy strony
              internetowe i aplikacje mobilne dla firm z różnych branż.
              Specjalizujemy się w nowoczesnych landing pages, sklepach online i
              treściach marketingowych, które pomagają markom wyróżnić się w
              cyfrowym świecie z myślą o SEO i pozycjonowaniu w Google.
            </p>
          </li>
          <li>
            <p className={s.aboutUsText}>
              Każdy projekt realizujemy z dbałością o detale, łącząc nowoczesny
              design z technologią. Tworzymy strony i aplikacje, które są
              estetyczne, skuteczne biznesowo i przyjazne w obsłudze. Dzięki
              naszemu doświadczeniu łączymy estetykę z funkcjonalnością, co
              buduje rozpoznawalność marki i pozytywne doświadczenia
              użytkowników.
            </p>
          </li>
        </ul>
        {teamVisible && <HeroTemList/> }
      </div>
    </div>
  );
};

export default AboutUsComponent;
