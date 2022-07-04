import React from "react";
import { Link } from "react-router-dom";
import "./descr.scss";

export const Descr = () => {
  return (
    <>
      <div className="descr">
        <div className="hello">Привіт, мене звати Владислав Фуклєв</div>
        <div className="descr-text">
          Я початківець у розробці і це мій веб-сайт, де ви можете перевірити
          мої нещодавні проекти і дізнайтеся, як зі мною
          зв’язатися.
        </div>
        <Link to="/pages/aboutme">
          <button className="descr-btn">Learn more</button>
        </Link>
      </div>
    </>
  );
};
