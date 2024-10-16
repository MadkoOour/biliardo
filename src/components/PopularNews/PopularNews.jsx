import NewsImageFull from '../../Assets/News Image Full.png';
import SideVideoCover from '../../Assets/Side Video Cover.png';
import '../../style/PopularNews.css';

function PopularNews() {
  return (
    <div className="popular-news-container">
      {/* Header with title and button */}
      <div className="popular-news-header">
        <h1>Popular News</h1>
        <button className="see-more">See More</button>
      </div>

      {/* Main Content (Main News + Side Videos) */}
      <div className="popular-news-content">
        {/* Main News Section */}
        <div className="main-news">
          <img src={NewsImageFull} alt="Main News" className="main-news-image" />
          <div className="news-details">
            <h2>Headline May Be <br /> Written Here.</h2>
            <p>Details Here Details Here Details Here Details Here Details <br/> Here Details Here</p>
            <div className='bottom-card-details'>
              <p className="date">12-5-2024</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </div>

        {/* Side Videos Section */}
        <div className="side-videos">
          {/* First video */}
          <div className="video">
            <img src={SideVideoCover} alt="Video Cover" className="video-cover" />
            <div className="video-details">
              <h3>Video Title May Be Written Here.</h3>
              <p className="date">12-5-2024</p>
              <button className="play-button">▶</button>
            </div>
          </div>

          {/* Second video */}
          <div className="video">
            <img src={SideVideoCover} alt="Video Cover" className="video-cover" />
            <div className="video-details">
              <h3>Video Title May Be Written Here.</h3>
              <p className="date">12-5-2024</p>
              <button className="play-button">▶</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularNews;
