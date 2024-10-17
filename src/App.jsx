import { useEffect } from "react";
import AOS from "aos";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AllRoutes from "./router/AllRoutes";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Scroll to top */}
      <ScrollToTop />

      <AllRoutes />
    </>
  );
}

export default App;
