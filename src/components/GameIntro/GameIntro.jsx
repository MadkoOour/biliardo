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
    <div className="game-intro-container" data-aos="fade">
      <div className="intro-container row">
        <div className="intro-headings col" data-aos="zoom-in">
          <h1>
            لعبة
            <br />
            المهارة و السرعة
          </h1>
          <p>
            احصل على فرصتك لمشاهدة
            <br />
            هؤلاء اللاعبين الموهوبين
          </p>
        </div>
        <div className="intro-images col">
          <img src={BiliPhoto} className="BiliPhoto" data-aos="fade-left" />
          <img src={PhotoTriangle} className="PhotoTriangle" data-aos="fade-left"/>
          <img src={SmallTriangles} className="SmallTriangles"  data-aos="fade-left" />
          <img src={BallsPattern2} className="BallsPattern2" data-aos="fade-left" />
        </div>
      </div>
      <div className="matches-container">
        <h2>{'المباريات'}</h2>
        <LiveBox />
        <UpcomingBox />
      </div>
    </div>
  );
}

export default GameIntro;
