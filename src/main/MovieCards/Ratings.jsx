import { Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const Ratings = ({ rating, onToggle, id, value }) => {
  return (
    <div className="containerRating">
      <p className="rating">Rating: {rating}</p>
      <div className="yourRating">
        <Typography component="legend">Your rating: </Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            onToggle(id, "value", newValue);
          }}
        />
      </div>
    </div>
  );
};

Ratings.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Ratings;
