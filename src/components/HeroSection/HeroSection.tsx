import s from './HeroSection.module.css'
import HeroTitle from './HeroTitle'

const HeroSection:React.FC = () => {
  return (
    <div className={s.herroContainer}>
        <HeroTitle/>
        </div>
  )
}

export default HeroSection