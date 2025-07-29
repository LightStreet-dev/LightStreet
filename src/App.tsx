
import { useMediaQuery } from 'react-responsive'
import './App.css'
import './components/Header/Header'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'


const App:React.FC = () => {
 const isMobileHeader = useMediaQuery({maxWidth:1049})
  return (
    <>
   <Header mobMediaQuery = {isMobileHeader} />
   <HeroSection />
    </>
  )
}

export default App
