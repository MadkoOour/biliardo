import "../../style/UpcomingBox.css";
import PlayerPhoto from "./../../Assets/Player Photo.png";
import VSPhoto from "./../../Assets/VS.png";

// Sample upcoming match data
const upcomingMatches = [
  {
    id: 1,
    player1: { name: "Player Name", photo: PlayerPhoto },
    player2: { name: "Player Name", photo: PlayerPhoto },
    time: "7:00 PM",
  },
  {
    id: 2,
    player1: { name: "Player Name", photo: PlayerPhoto },
    player2: { name: "Player Name", photo: PlayerPhoto },
    time: "7:00 PM",
  },
];

function UpcomingBox() {
  return (
    <>
      <h3 className="text-white mb-4" style={{textAlign:"right"}}>{'المباريات القادمة'}</h3>
      <div className="upcoming-box-container row" data-aos="fade">
        {upcomingMatches.map((match, index) => (
          <div key={index} className="match-box col">
            <div className="player-info">
              <img
                src={match.player1.photo}
                alt={match.player1.name}
                className="PlayerPhoto"
              />
              <div className="player-name">
                <h3>{match.player1.name}</h3>
              </div>
            </div>
            <div className="match-info">
              <img src={VSPhoto} className="VSPhoto" alt="VS" />
              <div className="match-time">
                <span>{match.time}</span>
              </div>
            </div>
            <div className="player-info">
              <img
                src={match.player2.photo}
                alt={match.player2.name}
                className="PlayerPhoto"
              />
              <div className="player-name">
                <h3>{match.player2.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UpcomingBox;
