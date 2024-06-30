import Counters from "./Counters/Counters.jsx";
import Sort from "./Sort.jsx";

const Header = ({ information, callback, nav }) => {
  return (
    <div className="containerHeader">
      <Counters information={information} />
      {nav.movies && (
        <div className="containerFilter">
          <Sort callback={callback} />
        </div>
      )}
    </div>
  );
};

export default Header;
