import GameIntro from "../components/GameIntro/GameIntro"
import MainSection from "../components/Main/MainSection"
import Navbar from "../components/Navbar/Navbar"

function Home() {
  return (
    <div className="home-container">
        <Navbar />
        <MainSection />
        <GameIntro />
    </div>
  )
}

export default Home