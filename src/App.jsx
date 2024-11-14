import ButtonGradient from "./assets/svg/ButtonGradient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Generate from "./pages/Generate";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/generate" element={<Generate />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <ButtonGradient />
      </BrowserRouter>
    </>
  );
};

export default App;
