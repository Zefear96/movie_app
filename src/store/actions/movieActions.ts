import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/constants";
import { Movie, MovieResponse } from "../../types/typesMovie";

export const movieApi = createApi({
	reducerPath: "movieApi",
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getMovies: builder.query<MovieResponse, void>({
			query: () => "/list_movies.json",
		}),
		getMovieById: builder.query<Movie, string>({
			query: () => "/movie_details.json",
		}),
		getMovieComments: builder.query<Comment[], void>({
			query: () => "/movie_comments.json",
		}),
		getMovieReview: builder.query<number, void>({
			query: () => "/movie_reviews.json",
		}),
		getMoviesUpcoming: builder.query<Movie[], void>({
			query: () => "/list_upcoming.json",
		}),
	}),
});

export const {
	useGetMoviesQuery,
	useGetMovieByIdQuery,
	useGetMovieCommentsQuery,
	useGetMovieReviewQuery,
	useGetMoviesUpcomingQuery,
} = movieApi;
