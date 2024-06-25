import Typography from "@mui/material/Typography";

const Ratings = ({ rating }) => {
  // const [value, setValue] = (useState < number) | (null > null);

  return (
    <div>
      <p className="rating">Rating: {rating}</p>
      <Typography component="legend">Controlled</Typography>
      {/* <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
    </div>
  );
};

export default Ratings;
