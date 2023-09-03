import { Routes, Route } from "react-router-dom";
import Home from "./Modules/Componants/Home";
import About from "./Modules/Componants/About";
import Services from "./Modules/Componants/Services";
import CertificationProgram from "./Modules/Componants/CertificationProgram";
import GrowYourBusiness from "./Modules/Componants/GrowYourBusiness";
import PlacementAssuranceProgram from "./Modules/Componants/PlacementAssuranceProgram";
import WebTalentGravity from "./Modules/Componants/WebTalentGravity";
import Contact from "./Modules/Componants/Contact";
import ProfessionalTraining from "./Modules/Componants/ProfessionalTraining";
import Training from "./Modules/Componants/Training";
// import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Copyright from "./common/Copyright";
import NavigationBar from "./common/NavigationBar";
import React from "react";
import "./Style.css";

function App() {
  return (
    <>
      <div>
        {/* <Navbar /> */}
<NavigationBar/>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/certificationProgram"
            element={<CertificationProgram />}
          />
          <Route path="/growYourBusiness" element={<GrowYourBusiness />} />
          <Route
            path="/placementAssuranceProgram"
            element={<PlacementAssuranceProgram />}
          />
          <Route path="/professionalTraining" element={<ProfessionalTraining />}/>
          <Route path="/webTalentGravity" element={<WebTalentGravity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/training" element={<Training />} />
        </Routes>

        <Footer />
        <Copyright />
      </div>
    </>
  );
}

export default App;
