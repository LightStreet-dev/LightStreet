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

const App: React.FC = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const isMobileHeader = useMediaQuery({ maxWidth: 860 });

  const toggleOpenForm = () => {
    setOpenForm((prev) => !prev);
  };

  return (
    <>
      <div className="headerHerroWrapper">
        <Header mobMediaQuery={isMobileHeader} toggleForm={toggleOpenForm} />
        <HeroSection />
      </div>
      <AboutUsComponent/>
      <OferSectionComponent toggleForm={toggleOpenForm}/>
      <AditionalServices/>
<PortfolioSectionCompopnent/>
      <BenefitsComponent/>
      <ContactSectionComponent/>
      <SubmitForm openForm={openForm} setOpenForm={setOpenForm} />
      <FooterComponent/>
    </>
  );
};

export default App;
