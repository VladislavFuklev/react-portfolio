import React from "react";
import { Link } from "react-router-dom";
import "./descr.scss";

export const Descr = () => {
  return (
    <>
      <div className="descr">
        <div className="hello">Hello, my name is Vladislav Fyklev</div>
        <div className="descr-text">
          I am Junior React Developer and this is my website where you can check
          my recent pet projects and find out how to contact with me.
        </div>
        <Link to='/pages/aboutme'>
          <button className="descr-btn">Learn more</button>
        </Link>
      </div>
    </>
  );
};
