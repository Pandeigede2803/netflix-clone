import "bootstrap/dist/css/bootstrap.css";

const Movie = (movie) => {
  return (
    <div key={movie.key} className="card p-4 mb-4" style={{ width: "18rem;" }}>
      <img src={movie.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.year}</p>
        <a href="#" className="btn btn-primary">
          Watch Movie
        </a>
      </div>
    </div>
  );
};

export default Movie;