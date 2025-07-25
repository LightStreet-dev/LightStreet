
import { useMediaQuery } from 'react-responsive'
import './App.css'
import './components/Header/Header'
import Header from './components/Header/Header'


const App:React.FC = () => {
 const isMobile = useMediaQuery({maxWidth:767})
  return (
    <>
   <Header mediaQuery = {isMobile} />
    </>
  )
}

export default App
