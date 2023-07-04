import { useQuery } from "react-query";
import { Movie } from "../types/typesMovie";
import { fetchMovies } from "../services/movies/fetchMovies";

export const useMovies = () => {
	const query = useQuery({
		queryFn: fetchMovies,
		queryKey: "movies",
		initialData: null,
	});

	return [query.data, query] as const;
};

export default useMovies;
