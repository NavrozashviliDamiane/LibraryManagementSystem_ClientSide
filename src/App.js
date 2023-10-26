import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PatronSignIn from "./pages/patron/PatronSignIn";
import HomePage from "./pages/HomePage";
import PatronSignUp from "./pages/patron/PatronSignUp";
import PatronDashboard from "./pages/patron/PatronDashboard";
import LibrarianSignUp from "./pages/LibrarianSignUp";
import LibrarianBooks from "./pages/LibrarianBooks";
import CreateBook from "./pages/CreateBook";
import BookScreen from "./pages/BookScreen";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/librarianlogin" element={<Login />} />
        <Route path="/patronlogin" element={<PatronSignIn />} />
        <Route path="/patronsignup" element={<PatronSignUp />} />
        <Route path="/patrondashboard" element={<PatronDashboard />} />
        <Route path="/librariansignup" element={<LibrarianSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/librarianbooks" element={<LibrarianBooks />} />
        <Route path="/createbook" element={<CreateBook />} />
        <Route path="/librarianbooks/:id" element={<BookScreen />} />
        <Route path="/librarianbooks/update/:id" component={<UpdateBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
