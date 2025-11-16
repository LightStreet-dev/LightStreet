import s from "./PortfolioComponent.module.css"

type webPage ={
  webPage: {
    img: string
    retina: string
    link:string
  }
}

const PortfolioComponent:React.FC<webPage> = ({ webPage:{img, retina, link} }) => {
  return (
    <div className={s.portfolioCard}>
             <a href={link} className={s.portfolioItem} target="blank">
          <img
            src={img}
            srcSet={`${retina} 2x`}
            alt={"img"}
     
          />
          {/* <p>{key}</p> */}
        </a>
 
    </div>
  );
}

export default PortfolioComponent