import "../../style/Organizers.css"
import OrganizersPhoto from "../../Assets/Organizers.png";

function Organizers() {
  return (
    <div className="organizers-container">
      <h3>{'المنظمون'}</h3>
      <img src={OrganizersPhoto} className="" />
    </div>
  );
}

export default Organizers;
