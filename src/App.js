import CoverSection from "./components/CoverSection";
import AboutSection from "./components/AboutSection";
import ProductSection from "./components/ProductSection";
import Why from "./components/Why";
import DemoForm from "./components/DemoForm";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App font-lato">
      <CoverSection/>
      <AboutSection/>
      <ProductSection/>
      <Why/>
      <DemoForm/>
      <Footer/>
    </div>
  );
}

export default App;
