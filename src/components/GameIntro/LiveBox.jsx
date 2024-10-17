import "../../style/LiveBox.css";
import PlayerPhoto from "./../../Assets/Player Photo.png";
import LivePhoto from "./../../Assets/Live Box.png";
import VSPhoto from "./../../Assets/VS.png";

function LiveBox() {
  // Sample player data
  const players = [
    { id: 1, name: "Player Name", photo: PlayerPhoto },
    { id: 2, name: "Player Name", photo: PlayerPhoto },
  ];

  return (
    <>
      <h3 className="text-white mb-4" style={{textAlign:"right"}}>{"المباريات المباشرة"}</h3>
      <div className="live-box-container row" data-aos="fade">
        {players.map((player, index) => (
          <div key={index} className="match-box col">
            <div className="player-info">
              <img
                src={player.photo}
                alt={player.name}
                className="PlayerPhoto"
              />
              <div className="player-name">
                <h3>{player.name}</h3>
              </div>
            </div>
            <div className="live-info">
              <img src={VSPhoto} className="VSPhoto" alt="VS" />
              <img src={LivePhoto} className="LivePhoto" alt="Live" />
            </div>
            <div className="player-info">
              <img
                src={player.photo}
                alt={player.name}
                className="PlayerPhoto"
              />
              <div className="player-name">
                <h3>{player.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LiveBox;
