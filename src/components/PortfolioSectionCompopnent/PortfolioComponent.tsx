import s from "./PortfolioComponent.module.css"

type webPage ={
  webPage: {
    img: string
    retina: string
  }
}

const PortfolioComponent:React.FC<webPage> = ({ webPage:{img, retina} }) => {
  return (
    <div className={s.portfolioCard}>
             <div  className={s.portfolioItem}>
          <img
            src={img}
            srcSet={`${retina} 2x`}
            alt={"img"}
     
          />
          {/* <p>{key}</p> */}
        </div>
 
    </div>
  );
}

export default PortfolioComponent