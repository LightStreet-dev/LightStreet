
import { useMediaQuery } from 'react-responsive'
import './App.css'
import './components/Header/Header'
import Header from './components/Header/Header'


const App:React.FC = () => {
 const isMobileHeader = useMediaQuery({maxWidth:880})
  return (
    <>
   <Header mediaQuery = {isMobileHeader} />
    </>
  )
}

export default App
