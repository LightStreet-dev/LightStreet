import { useMediaQuery } from "react-responsive";
import "./App.css";
import Header from "./components/HeaderSection/Header/Header";
import HeroSection from "./components/HeroSection/HeroComponent/HeroComponent";
import SubmitForm from "./components/ContactForm/SubmitForm/SubmitForm";
import { useState } from "react";
import AboutUsComponent from "./components/AboutUsComponent/AboutUsComponent";
import OferSectionComponent from "./components/OferComponent/OferSectionComponent";

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
      <OferSectionComponent/>
      <SubmitForm openForm={openForm} setOpenForm={setOpenForm} />
    </>
  );
};

export default App;
