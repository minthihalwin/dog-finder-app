import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppBody, Conatainer, Description } from "./Styles/styled";

function App() {
  return (
    <Conatainer>
      <Description>
        <ul>
          This is a Dog Finder App built with React JS using Dog API. The app
          uses:
          <li>ReactJS & TypeScript</li>
          <li>Redux for State Management</li>
          <li>Axios for fetching Data</li>
          <li>Styled Components</li>
          <li>Unit Tests With Jest & React Testing Library</li>
        </ul>
        <br />
        <p>
          Created by{" "}
          <a href="https://github.com/minthihalwin" target="_blank" rel="noreferrer">Min Thiha Lwin {" "}</a>
        </p>
      </Description>
      <AppBody>Dogform</AppBody>
    </Conatainer>
  );
}

export default App;
