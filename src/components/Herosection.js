import React from "react";

export default function Herosection() {
  return (
    <div>
      <div
        className="p-5 text-center bg-image "
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80")',
          height: 400,
        }}
      >
        <div
          className="mask"
          style={{
            
            height: "",
            margin: 0,
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Netflix Clone</h1>
              <h4 className="mb-3">Enjoy</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                WATCH NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};;
