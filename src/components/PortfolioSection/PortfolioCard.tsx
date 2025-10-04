import s from "./PortfolioCard.module.css"
interface PortfolioPage {
    name: string;
    image: string;
    transcription: string;
}
interface Portfolio{
    portfolio:PortfolioPage
    isActive:boolean
}
const PortfolioCard:React.FC<Portfolio> = ({portfolio:{name,image,transcription},isActive }) => {
  return (
    <div>

    </div>
  )
}

export default PortfolioCard