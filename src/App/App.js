import { Container, CssBaseline } from "@mui/material";
import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import "./app.scss";

function App() {
  return (
    <>
      <Container style={{ maxWidth: "700px" }}>
        <div className="bgc"></div>
        <CssBaseline />
        <div className="aaa">
          <Header />
          <Main />
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default App;
