import TopPlayerPhoto from '../../Assets/Top Player Photo.png'; // Assuming the image is placed correctly in your project
import '../../style/TopPlayers.css';

function TopPlayers() {
  return (
    <div className="top-players-container">
      <div className="section-header">
        <h3>Top Players</h3>
        <button className="see-players-btn">See All Players</button>
      </div>

      <div className="player-cards-container">
        {[1, 2, 3].map((_, index) => (
          <div className="player-card" key={index}>
            <img src={TopPlayerPhoto} alt="Top Player" className="player-photo" />
            <h3 className="player-name">Player Name</h3>
            <div className="player-info">
              <p>150 Points</p>
              <p>5 Wins</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPlayers;
