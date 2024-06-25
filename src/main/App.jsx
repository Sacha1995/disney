import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Game from "./Game/Game";
import HeaderMovie from "./Header/Header";
import { getLocalStorage, setLocalStorage } from "./Hooks";
import Movies from "./MovieCards/Movies";
import Buttons from "./Navigation/Buttons";

function App() {
  const [disneyMovies, setDisneyMovies] = useState();
  const [error, setError] = useState();
  const [nav, setNav] = useState({
    game: true,
    movies: false,
  });
  const [formElement, setFormElement] = useState({
    searchStr: "",
    select: "Old to new",
  });

  const onFormEvent = (e) => {
    const { value, id } = e.target;
    setFormElement({ ...formElement, [id]: value });
    console.log(e);
  };

  const getApiData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://disneymoviesapi.onrender.com/api/movies`
      );
      data.forEach((item) => {
        item.watched = false;
        item.wantToWatch = false;
        item.love = false;
      });
      setDisneyMovies(data);
      setLocalStorage("disneyMovies", data);
    } catch (e) {
      setError("API DOWN");
    }
  }, []);

  useEffect(() => {
    const storedData = getLocalStorage("disneyMovies");
    if (storedData) {
      setDisneyMovies(storedData);
    } else {
      getApiData();
    }
  }, []);

  const onToggle = (id, control) => {
    const _disneyMovies = [...disneyMovies];

    const indexOf = _disneyMovies.findIndex((item) => {
      return item.movieId === id;
    });

    switch (control) {
      case "love":
        _disneyMovies[indexOf].love = !_disneyMovies[indexOf].love;
        break;
      case "wantToWatch":
        _disneyMovies[indexOf].wantToWatch =
          !_disneyMovies[indexOf].wantToWatch;
        break;
      case "watched":
        _disneyMovies[indexOf].watched = !_disneyMovies[indexOf].watched;
        break;
      default:
        console.log("Something has gone wrong with onToggle");
        break;
    }

    setDisneyMovies(_disneyMovies);
  };

  const getFilteredAndSorted = (e) => {
    let filtered = [...disneyMovies];
    let { searchStr, select } = formElement;
    // filter by search
    if (searchStr) {
      filtered = filtered.filter((item) => {
        return item.title.toLowerCase().includes(searchStr.toLowerCase());
      });
    }
    //  sort
    switch (select) {
      case "Old to new":
        break;
      case "New to old":
        filtered.reverse();
        break;
      case "A to Z":
        filtered.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          } else if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
        break;
      case "Z to A":
        filtered.sort((a, b) => {
          if (a.title < b.title) {
            return 1;
          } else if (a.title > b.title) {
            return -1;
          }
          return 0;
        });
        break;
      case "Love":
        filtered.sort((a) => {
          if (a.love) {
            return -1;
          }
          return 0; // gets rid of warning
        });
        break;
      case "Watched":
        filtered.sort((a) => {
          if (a.watched) {
            return -1;
          }
          return 0; // gets rid of warning
        });
        break;
      case "Want to watch":
        filtered.sort((a) => {
          if (a.wantToWatch) {
            return -1;
          }
          return 0; // gets rid of warning
        });
        break;
      case "Rating: low to high":
        filtered.sort((a, b) => {
          if (a.rating > b.rating) {
            return 1;
          } else if (a.rating < b.rating) {
            return -1;
          }
          return 0;
        });
        break;
      case "Rating: high to low":
        filtered.sort((a, b) => {
          if (a.rating < b.rating) {
            return 1;
          } else if (a.rating > b.rating) {
            return -1;
          }
          return 0;
        });
        break;
      default:
        console.log("something went wrong with the sorting");
        break;
    }
    setLocalStorage("disneyMovies", filtered);
    return filtered;
  };

  const onNav = (name) => {
    if (name === "Game") {
      setNav({ game: true, movies: false });
    }
    if (name === "Movies") {
      setNav({ game: false, movies: true });
    }
  };

  // defensive checks
  if (error) {
    return (
      <p className="message">Sorry, the API is down. Please come back later.</p>
    );
  }

  if (!disneyMovies) {
    return <p className="message">Loading...</p>;
  }

  const filteredList = getFilteredAndSorted();

  return (
    <>
      <HeaderMovie
        information={getFilteredAndSorted()}
        callback={onFormEvent}
        nav={nav}
      />
      <h1>Disney Classics</h1>
      <Buttons onNav={onNav} />
      {nav.game && (
        <Game information={getFilteredAndSorted()} onToggle={onToggle} />
      )}
      {formElement.searchStr !== "" && !filteredList.length && (
        <p className="message">There are no matches.</p>
      )}
      {nav.movies && (
        <Movies information={getFilteredAndSorted()} onToggle={onToggle} />
      )}
    </>
  );
}

export default App;
