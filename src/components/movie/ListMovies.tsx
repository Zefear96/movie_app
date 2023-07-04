import React from "react";
import { useGetMoviesQuery } from "../../store/actions/movieActions";
import CardMovie from "./CardMovie";
import SpinnerDoubleThin from "../Spinner/SpinnerDoubleThin";
import { Movie } from "../../types/typesMovie";
import useMovies from "../../hooks/useMovies";

const ListMovies = () => {
	const [data, { isLoading, isError }] = useMovies();
	console.log(data);

	if (isLoading) {
		return <SpinnerDoubleThin />;
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
		<section className=" w-4/5 mx-auto my-5">
			<div className=" grid grid-cols-5 gap-10 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
				{data ? (
					data.data.movies.map((movie: Movie) => (
						<CardMovie key={movie.id} movie={movie} />
					))
				) : (
					<h1>Empty</h1>
				)}
			</div>
		</section>
	);
};

export default ListMovies;
