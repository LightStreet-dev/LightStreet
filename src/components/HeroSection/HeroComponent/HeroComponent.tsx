import s from './HeroComponent.module.css'
import HeroTitle from '../HeroTitle/HeroTitle'
import ReviewsContainer from '../HeroTemList/HeroTemList'

const HeroComponent:React.FC = () => {
  return (
    <div className={s.herroContainer}>
        <HeroTitle/>
        <ReviewsContainer/>
        </div>
  )
}

export default HeroComponent