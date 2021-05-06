import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import TopContent from "./components/TopContent/TopContent";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import Documents from "./components/Documents/Documents";
import Requirements from "./components/Requirements/Requirements";
import Footer from "./components/Footer/Footer";
import FormSection from "./components/FormSection/FormSection";

function App() {
  return (
    <div className="App">
      <Header />
      <TopContent />
      <FormSection />
      <ServiceSection />
      <Documents />
      <Requirements />
      <Footer />
    </div>
  );
}

export default App;
