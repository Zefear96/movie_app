import React from "react";
import { useGetMoviesQuery } from "../../api/movie/movieApi";
import CardMovie from "./CardMovie";
import SpinnerDoubleThin from "../Spinner/SpinnerDoubleThin";
import { Movie } from "../../utils/typesMovie";

const ListMovies = () => {
	const { data: movies, isError, isLoading, error } = useGetMoviesQuery();
	console.log(movies);

	if (isLoading) {
		return <SpinnerDoubleThin />;
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
		<div>
			<h2>Movies</h2>
			{movies ? (
				movies.data.movies.map((movie: Movie) => (
					<CardMovie key={movie.id} movie={movie} />
				))
			) : (
				<h1>Empty</h1>
			)}
		</div>
	);
};

export default ListMovies;
