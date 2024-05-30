import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { useState } from "react";
import logo from "../images/brandlogo.png";
import { FcTodoList } from "react-icons/fc";
import { FcGenericSortingDesc } from "react-icons/fc";
import { CgCalendarDates } from "react-icons/cg";

export default function Navigation({ setMovies, movies }) {
  const [searchKey, setSearchKey] = useState(null);
  const changeData = async (e) => {
    const query = e.target.innerHTML;
    try {
      const response = await fetch(
        `https://moviereviews-1.onrender.com/sort?by=${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const result = await response.json();
      console.log(result);
      setMovies(result);
    } catch (error) {
      console.error(error);
    }
  };
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("cliked ");
    //const value = searchKey;
    const keys = ["title", "genre", "director"];
    const searchRequest = keys.map((key) => ({
      key: key,
      op: "=",
      value: searchKey.capitalize(),
    }));
    console.log(searchRequest);
    const filterData = [];
    for (let i = 0; i < searchRequest.length; i++) {
      let requestBody = JSON.stringify(searchRequest[i]);
      try {
        const response = await fetch(
          "https://moviereviews-1.onrender.com/search",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: requestBody,
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (data.length !== 0) {
            filterData.push(data);
            console.log("the data is:", data);
          }
        } // else {
        //   console.log("Server returned error:", response.status);
        //   // Handle the error condition as needed
        // }
      } catch (Error) {
        console.log("error", Error);
      }
    }
    if (filterData.length !== 0) setMovies(filterData[0]);
    console.log("the total data is:", filterData);
  };
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };
  const getTodayMovies = async (e) => {
    try {
      const response = await fetch(
        "https://moviereviews-1.onrender.com/moviestoday"
      );
      if (response.ok) {
        const moviesToday = await response.json();
        setMovies(moviesToday);
      }
    } catch (Error) {
      console.log("movies fetch failed");
    }
  };
  const getAllMovies = async (e) => {
    try {
      const response = await fetch(
        "https://moviereviews-1.onrender.com/movies"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const result = await response.json();
      console.log(result);
      setMovies(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <nav className={`navbar navbar-expand-lg  ${styles.navbar}`}>
        <div className="container">
          <div className={`navbar-brand`}>
            <img src={logo} alt="17Reviews" className={`${styles.logo}`} />
            <a className={`${styles.brand}`} href="#">
              Reviews
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <div>
              <a
                href="#"
                className={`${styles.allmovies}`}
                onClick={getAllMovies}
              >
                AllMovies <FcTodoList />
              </a>
            </div>
            <div>
              <a
                href="#"
                className={`${styles.moviestoday}`}
                onClick={getTodayMovies}
              >
                MoviesToday <CgCalendarDates />
              </a>
            </div>

            <div className={`${styles.navbaritems}`}>
              <div className={`dropdown me-2 ${styles.item_1}`}>
                <a
                  className={`dropdown-toggle ${styles.filter}`}
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter All <FcGenericSortingDesc />
                </a>
                <ul
                  className={`dropdown-menu ${styles.sortitem}`}
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a
                      className={`dropdown-item ${styles.item}`}
                      onClick={changeData}
                    >
                      Duration
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${styles.item}`}
                      onClick={changeData}
                    >
                      Rating
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${styles.item}`}
                      onClick={changeData}
                    >
                      ReleaseDate
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`ml-auto ${styles.search}`}>
              <form className={`d-flex`} onSubmit={handleSearch} role="search">
                <input
                  className={`me-2 ${styles.searchbar}`}
                  type="search"
                  placeholder="Search By Title, Genre, Director"
                  aria-label="Search"
                  onChange={handleChange}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
