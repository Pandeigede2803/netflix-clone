import { useEffect, useState } from "react";
import Movie from "./Movie";
import "bootstrap/dist/css/bootstrap.css";
// import "./css/Pass.css";
import Nav from "./Nav";

import LoadingCard from "./Loadingcard";

const ListMovies = () => {
  const [movies, setMovies] = useState([]); //use state set pertama untuk mapping data dari API
  const [loading, setLoading] = useState(true); //use state untuk // ketika mapping data dari API sedang loading agar screen tidak freeze
  // const [searchTerm,setSearchTerm] = useState(localStorage.getItem("katakunci")||"");
  const [searchTerm, setSearchTerm] = useState("One piece"); //use state kedua untuk memanipulasi API
  const [search, setSearch] = useState("");

  // const gantiKeyword = (event)=>{
  //     setSearchTerm(event.target.value);
  // }

  // hook
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=b48e76a7&type=movie&s=${searchTerm}`
      );
      const { Search } = await data.json();
      setMovies(Search);
      setLoading(false);
    }

    fetchData();

    localStorage.setItem("katakunci", searchTerm);
    localStorage.removeItem("kata");
    // },[movies.length]);
  }, [search]);

  return (
    <div className="bg-dark">
      <Nav />
      <div className="container text-center">
        <h2 className="flex">Movies</h2>
        {/* <nav className="navbar navbar-light bg-light">
          <form className="flex flex-">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => setSearch(searchTerm)}
            >
              Search
            </button>
          </form>
        </nav> */}

        <div className="container">
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => setSearch(searchTerm)}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="input-group ">
          <div className="form-outline">
            <input
              type="search"
              id="form1"
              className="form-control"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <label className="form-label" for="form1"></label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setSearch(searchTerm)}
          >
            Search
          </button>
        </div> */}
        {/* <input className="form-control" id="cari ini" value={searchTerm} type="search" onChange={gantiKeyword}></input> */}

        <div className="d-flex">
          <div className="row justify-content-center">
            {loading ? (
              <LoadingCard />
            ) : (
              movies.map((item) => {
                return (
                  <div className="col-lg-3 col-md-3 col-sm-4  col-9">
                    <Movie
                      key={item.key}
                      title={item.Title}
                      year={item.Year}
                      image={item.Poster}
                    ></Movie>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMovies;
