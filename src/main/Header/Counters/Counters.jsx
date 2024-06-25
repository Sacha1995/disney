import { useState } from "react";
import { useCount, useMakeList } from "../../Hooks";
import ComeDown from "./ComeDown";
import ComeDownList from "./ComeDownList";

const Counters = ({ information }) => {
  const [dropdown, setDropdown] = useState({
    wantToWatch: false,
    love: false,
    watched: false,
  });

  const countWantToWatch = useCount("wantToWatch", information);
  const countWatched = useCount("watched", information);
  const countLove = useCount("love", information);
  const listWantToWatch = useMakeList("wantToWatch", information);
  const listWatched = useMakeList("watched", information);
  const listLove = useMakeList("love", information);

  const changeView = (type) => {
    setDropdown({ [type]: !dropdown[type] });
  };

  return (
    <div className="containerCounters">
      <p className="Counter" onClick={() => changeView("wantToWatch")}>
        Want to watch: {countWantToWatch.length} <ComeDown />
      </p>
      <ul className={dropdown.wantToWatch ? "on" : "off"}>
        {listWantToWatch.map((item, index) => (
          <ComeDownList key={index} listItem={item} />
        ))}
      </ul>
      <p className="Counter" onClick={() => changeView("watched")}>
        Have watched: {countWatched.length} <ComeDown />
      </p>

      <ul className={dropdown.watched ? "on" : "off"}>
        {listWatched.map((item, index) => (
          <ComeDownList key={index} listItem={item} />
        ))}
      </ul>

      <p className="Counter" onClick={() => changeView("love")}>
        Love: {countLove.length} <ComeDown />
      </p>
      <ul className={dropdown.love ? "on" : "off"}>
        {listLove.map((item, index) => (
          <ComeDownList key={index} listItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default Counters;
