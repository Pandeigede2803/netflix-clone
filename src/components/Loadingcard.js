import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

const LoadingCard = () => {
  return (
    <div className="card p-4" style={{ width: "18rem" }}>
      <div className="card-img-top">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">&nbsp;</h5>
        <p className="card-text">&nbsp;</p>
        <a href="#" className="btn btn-primary disabled" disabled>
          Loading...
        </a>
      </div>
    </div>
  );
};

export default LoadingCard;