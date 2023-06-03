import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/Authorization/LoginForm";
import RegisterForm from "./components/Authorization/RegisterForm";
import ListMovies from "./components/movie/ListMovies";

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<LoginForm />} />
			<Route path="/registration" element={<RegisterForm />} />
			<Route path="/movies" element={<ListMovies />} />
		</Routes>
	);
};

export default MainRoutes;
