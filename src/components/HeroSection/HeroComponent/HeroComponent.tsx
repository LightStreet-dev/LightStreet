import s from './HeroComponent.module.css'
import HeroTitle from '../HeroTitle/HeroTitle'

import HeroTemList from '../HeroTemList/HeroTemList'
import { useMediaQuery } from 'react-responsive'
const HeroComponent:React.FC = () => {
  const showTeam = useMediaQuery({minWidth:768});
  return (
    <div className={s.herroContainer}>
        <HeroTitle/>
        {showTeam && <HeroTemList />}
      
        </div>
  )
}

export default HeroComponent