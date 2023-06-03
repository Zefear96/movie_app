import React from "react";
import { Movie } from "../../utils/typesMovie";

const CardMovie = ({ movie }: { movie: Movie }) => {
	return (
		<div>
			<h4>{movie.title}</h4>
		</div>
	);
};

export default CardMovie;
