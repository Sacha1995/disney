import Counters from "./Counters/Counters.jsx";
import Search from "./Search.jsx";
import Sort from "./Sort.jsx";

const HeaderMovie = ({ information, callback }) => {
  return (
    <div className="containerHeader">
      <Counters information={information} />
      <div className="containerFilter">
        <Search callback={callback} />
        <Sort callback={callback} />
      </div>
    </div>
  );
};

export default HeaderMovie;
