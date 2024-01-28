import { IMG_CDN_URL } from "../Config";
import { restrautList } from "../Config";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageID,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageID} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestrauntCard;
