import FormElements from "../Reusable-code/FormElements";

const Sort = ({ callback }) => {
  return (
    <div className="dropdown">
      <FormElements
        type="select"
        label="Order:"
        id="select"
        name="order"
        callback={callback}
        options={[
          "Old to new",
          "New to old",
          "A to Z",
          "Z to A",
          "Love",
          "Want to watch",
          "Watched",
          "Rating: low to high",
          "Rating: high to low",
        ]}
      />
    </div>
  );
};

export default Sort;
