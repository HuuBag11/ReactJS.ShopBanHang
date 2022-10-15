import React from "react";
import SimpleMap from "./Map";
import Acc from "./Accordion";

export default function About() {
  return (
    <>
      <div className="container-fluid mb-5">
        <h1 className="title text-center my-5">About Us</h1>
        <div className="row container-fluid">
          <div className="container col-6">
            <SimpleMap />
          </div>
            <Acc/>
        </div>
      </div>
    </>
  );
}
