import React from "react";
import { Route, Routes } from "react-router";
import { Descr } from "../components/Descr/Descr.js";
import { Links } from "../components/Links/Links.js";
import { AboutMe } from "../pages/AboutMe/AboutMe.js";
import { Projects } from "../pages/Projects/Projects.js";
import "./main.scss";

export const Main = () => {
  return (
    <>
      <Links />

      <Routes>
        <Route path="/" element={<Descr />} />
        <Route path="/pages/aboutme" element={<AboutMe />} />
        <Route path="/pages/projects" element={<Projects />} />
      </Routes>
    </>
  );
};
