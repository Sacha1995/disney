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

  //turned into custom hooks, was that necessary???
  // const count = (type) => {
  //   let countedArray = [];
  //   countedArray = information.filter((item) => {
  //     return item[type];
  //   });
  //   return countedArray;
  // };

  // const makeList = (type) => {
  //   const _countedArray = count(type);
  //   let list = _countedArray.map((item) => {
  //     return item.title;
  //   });
  //   return list;
  // };

  const changeView = (type) => {
    setDropdown({ [type]: !dropdown[type] });
  };

  return (
    <div className="containerCounters">
      <p className="Counter" onClick={() => changeView("wantToWatch")}>
        Want to watch: {countWantToWatch.length} <ComeDown />
      </p>
      {dropdown.wantToWatch && (
        <ul>
          {listWantToWatch.map((item, index) => (
            <ComeDownList key={index} listItem={item} />
          ))}
        </ul>
      )}
      <p className="Counter" onClick={() => changeView("watched")}>
        Have watched: {countWatched.length} <ComeDown />
      </p>
      {dropdown.watched && (
        <ul>
          {listWatched.map((item, index) => (
            <ComeDownList key={index} listItem={item} />
          ))}
        </ul>
      )}
      <p className="Counter" onClick={() => changeView("love")}>
        Love: {countLove.length} <ComeDown />
      </p>
      {dropdown.love && (
        <ul>
          {listLove.map((item, index) => (
            <ComeDownList key={index} listItem={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Counters;

// const Counters = ({ information }) => {
//   let dropdown = { wantToWatch: false, love: false, watched: false };

//   const count = (type) => {
//     let countedArray = [];
//     countedArray = information.filter((item) => {
//       return item[type];
//     });
//     return countedArray;
//   };

//   const changeView = (type) => {
//     dropdown[type] = !dropdown[type];
//   };

//   const makeList = (type) => {
//     const _countedArray = count(type);
//     let list = _countedArray.map((item) => {
//       return item.title;
//     });
//     return list;
//   };

//   return (
//     <div className="containerCounters">
//       <p className="Counter" onClick={() => changeView("wantToWatch")}>
//         Want to watch: {count("wantToWatch").length} <ComeDown />
//       </p>
//       <ul>
//         {dropdown.wantToWatch === true
//           ? makeList("wantToWatch").map((item, index) => (
//               <ComeDownList key={index} listItem={item} />
//             ))
//           : ""}
//       </ul>
//       <p className="Counter" onClick={() => changeView("watched")}>
//         Have watched: {count("watched").length} <ComeDown makeList={makeList} />
//       </p>
//       <ul>
//         {makeList("watched").map((item, index) => (
//           <ComeDownList key={index} listItem={item} />
//         ))}
//       </ul>
//       <p className="Counter" onClick={() => changeView("love")}>
//         Love: {count("love").length} <ComeDown makeList={makeList} />
//       </p>
//       <ul>
//         {if (dropdown.love === true){
//           makeList("love").map((item, index) => (
//           <ComeDownList key={index} listItem={item} />
//         ))}}
//       </ul>
//     </div>
//   );
// };

// export default Counters;
