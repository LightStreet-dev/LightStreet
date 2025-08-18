
import { useMediaQuery } from 'react-responsive'
import './App.css'
import './components/Header/Header'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import SubmitForm from './components/Form/SubmitForm'
import { useState } from 'react'


const App:React.FC = () => {
  const [openForm, setOpenForm] = useState<boolean>(false)
  const isMobileHeader = useMediaQuery({maxWidth:1049})

  const toggleOpenForm = () => {
    setOpenForm(prev => !prev)
     
  };
 
  
   
  return (
    <>
   <Header mobMediaQuery = {isMobileHeader} toggleForm = {toggleOpenForm}/>
   <HeroSection />
   <SubmitForm openForm = {openForm}/>
    </>
  )
}

export default App
