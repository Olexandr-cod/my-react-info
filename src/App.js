import React from "react";

import "./App.css";
import Header from "./component/Header";
import AddList from "./component/AddList";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import AllInform from "./component/AllInform";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Route path="/all" component={AllInform} />
          <Route path="/add" component={AddList} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
