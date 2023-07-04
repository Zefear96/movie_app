import React from "react";
import { Movie } from "../../types/typesMovie";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./styles/CardMovie.css";

const CardMovie = ({ movie }: { movie: Movie }) => {
	return (
		// <div className=" m-auto">
		// 	<img
		// 		src={movie.medium_cover_image}
		// 		alt="movie image"
		// 		width={150}
		// 		height={250}
		// 		className=" rounded-lg"
		// 	/>
		// </div>
		<div className="wrapper">
			<div className="card">
				<div className="poster">
					<img src={movie.medium_cover_image} alt="Location Unknown" />
				</div>
				<div className="details">
					<h1>{movie.title}</h1>
					<h2>2021 • PG • 1hr 38min</h2>
					<div className="rating">
						<Rating
							name="read-only"
							value={movie.rating}
							readOnly
							defaultValue={2}
							max={10}
						/>
					</div>
					<div className="tags">
						{movie.genres
							? movie.genres.map((genr) => <span className="tag">{genr}</span>)
							: null}
					</div>

					<p className="desc">{movie.summary.substring(0, 100) + "..."}</p>
				</div>
			</div>
		</div>
	);
};

export default CardMovie;
