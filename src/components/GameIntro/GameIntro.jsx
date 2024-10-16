import "../../style/GameIntro.css";
import "../../style/MatchesSection.css";
import BiliPhoto from "./../../Assets/Photo.png";
import PhotoTriangle from "./../../Assets/Photo Triangle.png";
import SmallTriangles from "./../../Assets/Small Triangles.png";
import BallsPattern2 from "./../../Assets/Balls Pattern 2.png";
import LiveBox from "./LiveBox";
import UpcomingBox from "./UpcomingBox";
function GameIntro() {
  return (
    <div className="game-intro-container">
      <div className="intro-container row">
        <div className="intro-headings col">
          <h1>
            A GAME OF<br />SKILL AND<br />SPEED
          </h1>
          <p>Get Your chance to watch<br />These talnted Players</p>
        </div>
        <div className="intro-images col">
          <img src={BiliPhoto} className="BiliPhoto" />
          <img src={PhotoTriangle} className="PhotoTriangle" />
          <img src={SmallTriangles} className="SmallTriangles" />
          <img src={BallsPattern2} className="BallsPattern2" />
        </div>
      </div>
      <div className="matches-container">
        <h2>Matches</h2>
        <LiveBox />
        <UpcomingBox />
      </div>
    </div>
  );
}

export default GameIntro;
