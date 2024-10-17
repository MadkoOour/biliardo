import "../../style/AboutSection.css";
import BilliardsTable from "../../Assets/Billiards Table.png";
import AboutCircle from "../../Assets/About Circle.png";
import BallsPattern from "../../Assets/Balls Pattern 3.png";

function AboutSection() {
  return (
    <div className="about-section-container row">
      <div className="about-text col" data-aos="fade-right">
        <h1>{"عن البطولة"}</h1>
        <p>
          بطولة العالم للبلياردو في جدة تعد واحدة من أهم الفعاليات الرياضية التي
          تجمع بين أفضل لاعبي البلياردو من جميع أنحاء العالم. تقام البطولة في
          أجواء مليئة بالحماس والتحدي، حيث يتنافس المشاركون على الفوز باللقب في
          إحدى أجمل المدن السعودية. تعتبر هذه البطولة فرصة رائعة لعشاق اللعبة
          لمتابعة المهارات الاستثنائية والأداء المذهل، بالإضافة إلى الاستمتاع
          بالأجواء الرائعة التي تميز مدينة جدة.
        </p>
        <button className="read-more">Read More</button>
      </div>
      <div className="about-images col" data-aos="fade-left">
        <img src={BallsPattern} className="BallsPattern" />
        <img src={AboutCircle} className="AboutCircle" />
        <img src={BilliardsTable} className="BilliardsTable" />
      </div>
    </div>
  );
}

export default AboutSection;
