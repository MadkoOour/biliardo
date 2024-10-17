import "../../style/AboutSection.css";
import BilliardsTable from "../../Assets/Billiards Table.png";
import AboutCircle from "../../Assets/About Circle.png";
import BallsPattern from "../../Assets/Balls Pattern 3.png";

function AboutSection() {
  return (
    <div className="about-section-container row">
      <div className="about-text col">
        <h1>{"عن البطولة"}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="read-more">Read More</button>
      </div>
      <div className="about-images col">
        <img src={BallsPattern} className="BallsPattern"/>
        <img src={AboutCircle} className="AboutCircle"/>
        <img src={BilliardsTable} className="BilliardsTable"/>
      </div>
    </div>
  );
}

export default AboutSection;
