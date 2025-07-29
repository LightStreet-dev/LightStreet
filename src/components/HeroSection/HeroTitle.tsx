import s from "./HeroTitle.module.css";

const HeroTitle = () => {
  return (
    <div>
      <h1 className={s.heroTitle}>
        <span className={s.heroTitleContent1}>Complete</span>{" "}
        <span className={s.heroTitleContent2}>Design</span>{" "}
        <span className={s.heroTitleContent3}>Solutions</span>{" "}
      </h1>

      <p className={s.heroText}>
        From idea to launch — tailored UI/UX, visual identity, and web assets
        for your product.
      </p>

        <button className={s.heroBatton} type="button">
          START NOW
        </button>
    
    </div>
  );
};

export default HeroTitle;
