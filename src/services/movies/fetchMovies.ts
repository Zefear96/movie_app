import axios from "axios";
import { API_URL } from "../../utils/constants";
import { Movie, MovieResponse } from "../../types/typesMovie";

export const fetchMovies = async () => {
	try {
		const res = await axios.get<MovieResponse>(`${API_URL}/list_movies.json`);
		return res.data;
	} catch (error) {
		throw new Error("Failed to fetch movies");
	}
};
