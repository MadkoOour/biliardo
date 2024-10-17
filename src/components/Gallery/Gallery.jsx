import '../../style/Gallery.css'
import Gallery1 from "../../Assets/Gallery 1.png";
import Gallery2 from "../../Assets/Gallery 2.png";
import Gallery3 from "../../Assets/Gallery 3.png";
import Gallery4 from "../../Assets/Gallery 4.png";

function Gallery() {
  return (
    <div className="gallery-container">
      <h3>{"المعرض"}</h3>
      <img src={Gallery1} className="Gallery1" />
      <img src={Gallery2} className="Gallery2" />
      <img src={Gallery3} className="Gallery3" />
      <img src={Gallery4} className="Gallery4" />
    </div>
  );
}

export default Gallery;
