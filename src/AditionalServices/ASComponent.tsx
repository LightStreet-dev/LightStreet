import s from "./ASComponent.module.css";
interface AsInfo {
  asInfo: {
    svg: string;
    serviceName: string;
    info: string;
  };
}
const ASComponent: React.FC<AsInfo> = ({
  asInfo: { svg, serviceName, info },
}) => {
  return (
    <div className={s.AScontainer}>
      <div className={s.iconWrapper}>
              <svg className={s.asIcon}>
          <use href={svg}></use>
        </svg>
      </div>
      <h2 className={s.AStitle}>{serviceName}</h2>
      {/* <p className={s.AStext}>{info}</p> */}
    </div>
  );
};

export default ASComponent;
