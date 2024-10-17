import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ParticipantPhoto from '../../Assets/Participant Full 2.png';
import '../../style/ParticipantsSlider.css'

function ParticipantsSlider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slider-container">
      <h3>{"المشاركون"}</h3>
      <Carousel responsive={responsive}>
        {[1, 2, 3, 4, 5, 6].map((player, index) => (
          <img key={index} src={ParticipantPhoto} alt={`Participant ${player}`}/>
        ))}
      </Carousel>
    </div>
  );
}

export default ParticipantsSlider;
