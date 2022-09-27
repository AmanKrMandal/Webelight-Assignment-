import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repository from "./component/Repository/Repository";
import Commit from "./component/Commit";
import Additions from "./component/Additions";
import Deletions from "./component/Deletions";
import Nav from "./component/Nav";
import { Provider } from "react-redux";
import store from "./component/Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Nav/> */}
        <h1 className="text-center text-white display-4 bg-dark">
          Most Starred Repos
        </h1>
        <Routes>
          <Route path="/" element={<Repository />} />
          <Route path="/commit" element={<Commit />} />
          <Route path="/additions" element={<Additions />} />
          <Route path="/deletions" element={<Deletions />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
