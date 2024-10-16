import NewsImageFull from '../../Assets/News Image Full.png';
import SideVideoCover from '../../Assets/Side Video Cover.png';
import '../../style/PopularNews.css';
import ParticipantsSlider from './ParticipantsSlider';

function PopularNews() {
  return (
    <div className="popular-news-container" data-aos="fade">
      {/* Header with title and button */}
      <div className="popular-news-header">
        <h1>Popular News</h1>
        <button className="see-more">{'المزيد'}</button>
      </div>

      {/* Main Content (Main News + Side Videos) */}
      <div className="popular-news-content" data-aos="fade">
        {/* Main News Section */}
        <div className="main-news">
          <img src={NewsImageFull} alt="Main News" className="main-news-image" />
          <div className="news-details">
            <h2>بطولة العالم للبلياردو تنطلق قريباً</h2>
            <p>استعدوا لمتابعة أروع منافسات البلياردو في العالم أمهر اللاعبين من مختلف الدول يتنافسون على اللقب</p>
            <div className='bottom-card-details'>
              <p className="date">12-5-2024</p>
              <button className="read-more">اقرأ المزيد</button>
            </div>
          </div>
        </div>

        {/* Side Videos Section */}
        <div className="side-videos">
          {/* First video */}
          <div className="video">
            <img src={SideVideoCover} alt="Video Cover" className="video-cover" />
            <div className="video-details">
              <h3>{'تجمع أبطال العالم '}</h3>
              <p className="date">12-5-2024</p>
            </div>
          </div>

          {/* Second video */}
          <div className="video">
            <img src={SideVideoCover} alt="Video Cover" className="video-cover" />
            <div className="video-details">
              <h3>{'أقوى منافسات البلياردو'}</h3>
              <p className="date">12-5-2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Participants Slider Component */}
      <ParticipantsSlider/>
    </div>
  );
}

export default PopularNews;
