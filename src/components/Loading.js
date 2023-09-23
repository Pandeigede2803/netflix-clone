import React from 'react';
import LoadingCard from './Loadingcard';

export default function Loading() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <LoadingCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <LoadingCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <LoadingCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <LoadingCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <LoadingCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <LoadingCard />
        </div>
      </div>
    </div>
  );
}
