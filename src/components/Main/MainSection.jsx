import "../../style/MainSection.css";
import BallsImage from "../../Assets/Pool.png";
import StickImage from "../../Assets/Cue.png";

function MainSection() {
  return (
    <div className="main-section-container row">
      <div className="images-container col-6">
        <img src={BallsImage} />
        <img src={StickImage} />
      </div>
      <div className="headings-container col-6">
        <h3>{'اختبر أفضل تجربة'}</h3>
        <h1>{'.لعبة بلياردو على الإطلاق'}</h1>
        <p>{'تُقام في جدة، المملكة العربية السعودية'}</p>
        <p>{'3-8 '} {'يونيو'} {'2024'}</p>
      </div>
    </div>
  );
}

export default MainSection;
