import AboutSection from "../components/About/AboutSection"
import Footer from "../components/Footer/Footer"
import Gallery from "../components/Gallery/Gallery"
import GameIntro from "../components/GameIntro/GameIntro"
import MainSection from "../components/Main/MainSection"
import Navbar from "../components/Navbar/Navbar"
import Organizers from "../components/Organizers/Organizers"
import PopularNews from "../components/PopularNews/PopularNews"
import TopPlayers from "../components/TopPlayers/TopPlayers"

function Home() {
  return (
    <div className="home-container">
        <Navbar />
        <MainSection />
        <GameIntro />
        <TopPlayers />
        <PopularNews />
        <AboutSection />
        <Gallery />
        <Organizers /> 
        <Footer />
    </div>
  )
}

export default Home