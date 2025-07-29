import s from './HeroSection.module.css'
import HeroTitle from './HeroTitle'
import ReviewsContainer from './ReviewsContainer'

const HeroSection:React.FC = () => {
  return (
    <div className={s.herroContainer}>
        <HeroTitle/>
        <ReviewsContainer/>
        </div>
  )
}

export default HeroSection