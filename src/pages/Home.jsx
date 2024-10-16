import GameIntro from "../components/GameIntro/GameIntro"
import MainSection from "../components/Main/MainSection"
import Navbar from "../components/Navbar/Navbar"
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
    </div>
  )
}

export default Home