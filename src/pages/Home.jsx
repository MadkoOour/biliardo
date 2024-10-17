import AboutSection from "../components/About/AboutSection"
import Gallery from "../components/Gallery/Gallery"
import GameIntro from "../components/GameIntro/GameIntro"
import MainSection from "../components/Main/MainSection"
import Organizers from "../components/Organizers/Organizers"
import PopularNews from "../components/PopularNews/PopularNews"
import TopPlayers from "../components/TopPlayers/TopPlayers"

function Home() {
  return (
    <div className="home-container">
        <MainSection />
        <GameIntro />
        <TopPlayers />
        <PopularNews />
        <AboutSection />
        <Gallery />
        <Organizers /> 
    </div>
  )
}

export default Home