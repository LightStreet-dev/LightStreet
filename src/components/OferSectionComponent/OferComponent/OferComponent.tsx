import s from "./OferComponent.module.css"
interface Page {
  title: string;
  features: string[];
  price: string;
  timeTitle: string;
  time: string;
}

interface oferProps {
  page: Page;
}
const OferComponent: React.FC<oferProps> = ({
  page: { title, features, price, timeTitle, time },
}) => {
  return (
    <div className={s.slideWraper}>
      <h2  className={s.oferTitle}>{title}</h2>
      <ul className={s.featuresList}>
        {features.map((value, idx) => (
          <li  className={s.featurIteam}key={idx}>{value}</li>
        ))}
      </ul>
      <p className={s.oferPrice}>{price}</p>
      <p className={s.oferTermin}>{timeTitle}</p>
      <p className={s.oferTermin}>{time}</p>
    </div>
  );
};

export default OferComponent;
