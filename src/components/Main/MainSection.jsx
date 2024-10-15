import '../../style/MainSection.css';
import BallsImage from '../../Assets/Pool.png';
import StickImage from '../../Assets/Cue.png';

function MainSection() {
  return (
        <div className="main-section-container row borderx">
            <div className='images-container col'>
                {/* <img src={BallsImage} width={250} height={550} />
                <img src={StickImage} width={250} height={550} /> */}
            </div>
            <div className='headings-container col'>
                <h3>Experience the best </h3>
                <h1>POOL GAME EVER</h1>
                <p>Taking Place in Jeddah, Saudi Arabia</p>
                <p>3-8 june 2024</p>
            </div>
        </div>
  )
}

export default MainSection;
