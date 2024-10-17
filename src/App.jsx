import { useEffect } from "react";
import AOS from "aos";
import "./App.css";
import AllRoutes from "./router/AllRoutes";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
