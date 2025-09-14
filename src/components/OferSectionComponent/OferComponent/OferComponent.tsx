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
    <div className="">
      <h2  className={s.test}>{title}</h2>
      <ul>
        {features.map((value, idx) => (
          <li  className={s.test}key={idx}>{value}</li>
        ))}
      </ul>
      <p className={s.test}>{price}</p>
      <p className={s.test}>{timeTitle}</p>
      <p className={s.test}>{time}</p>;
    </div>
  );
};

export default OferComponent;
