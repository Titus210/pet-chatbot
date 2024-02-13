import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import GetStarted from "../pages/getstarted/GetStarted";
import DeskTopChat from "../pages/chatpage/DeskTopChat";

const UserRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<GetStarted />} />
        <Route exact path="/landing" element={<HomePage />} />
        <Route exact path="/chat" element={<DeskTopChat />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default UserRoutes;
