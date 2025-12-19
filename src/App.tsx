import { useMediaQuery } from "react-responsive";
import "./App.css";
import Header from "./components/HeaderSection/Header/Header";
import HeroSection from "./components/HeroSection/HeroComponent/HeroComponent";
import SubmitForm from "./components/ContactForm/SubmitForm/SubmitForm";
import { useState } from "react";
import AboutUsComponent from "./components/AboutUsComponent/AboutUsComponent";
import OferSectionComponent from "./components/OferSectionComponent/OferSectionComponent";
import AditionalServices from "./components/AditionalServices/AditionalServices";
import BenefitsComponent from "./components/BenefitsSection/BenefitsComponent/BenefitsComponent";
import ContactSectionComponent from "./components/ContactSectionComponent/ContactSectionComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import PortfolioSectionCompopnent from "./components/PortfolioSectionCompopnent/PortfolioSectionCompopnent";
import PrivateData from "./components/FooterComponent/PrivateDataComponent/PrivateData";

const App: React.FC = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const isMobileHeader = useMediaQuery({ maxWidth: 860 });
  const [openLink, setOpenLink] = useState<boolean>(false);

  
  const handleToggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };

  return (
    <div className="bodyWrapper">
      <div className="headerHerroWrapper">
        <Header mobMediaQuery={isMobileHeader} toggleForm={handleToggle} setOpenForm={setOpenForm} />
        <HeroSection />
      </div>
      <AboutUsComponent/>
      <OferSectionComponent toggleForm={handleToggle} setOpenForm={setOpenForm}/>
      <AditionalServices/>
<PortfolioSectionCompopnent/>
      <BenefitsComponent/>
      <ContactSectionComponent/>
      <SubmitForm openForm={openForm} setOpenForm={setOpenForm} setOpenLink={setOpenLink} toggleModal = {handleToggle} />
      <FooterComponent toggleModal = {handleToggle} setOpenLink={setOpenLink} />
      <PrivateData toggleModal = {handleToggle} openLink={openLink} setOpenLink={setOpenLink}/>
    </div>
  ); 
};

export default App;
