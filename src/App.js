import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Explore from "./page/Explore";
import Create from "./page/Create";
import Mypage from "./page/Mypage";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
