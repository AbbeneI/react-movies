import "./styles.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import NavBar from "../../components/NavBar/NavBar";
import { movies } from "../../data.js";

export default function App() {
  const [user, setUser] = useState();

  function addUser(user) {
    setUser([user]);
  }

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage addUser={addUser} />
        // <AuthPage />
      )}
    </div>
  );
}
