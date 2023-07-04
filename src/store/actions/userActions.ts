import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/constants";
import { ArgRegisterUser, ArgUpdateUser, User } from "../../types/typesUser";

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		createUser: builder.mutation<void, ArgRegisterUser>({
			query: (user) => ({
				url: "/user_register.json",
				method: "POST",
				body: "user",
			}),
		}),
		getUser: builder.query<User, string>({
			query: (user_key) => `/user_profile.json?user_key=${user_key}`,
		}),
		updateUser: builder.mutation<void, ArgUpdateUser>({
			query: (user) => ({
				url: "/user_edit_settings.json",
				method: "PUT",
				body: "user",
			}),
		}),
		forgotPassword: builder.mutation({
			query: (user) => ({
				url: "/user_forgot_password.json",
				method: "POST",
				body: "user",
			}),
		}),
		resetPassword: builder.mutation({
			query: (user) => ({
				url: "/user_reset_password.json",
				method: "POST",
				body: "user",
			}),
		}),
		likeMovie: builder.mutation<void, { movieId: string }>({
			query: (user) => ({
				url: "/like_movie.json",
				method: "POST",
				body: "user",
			}),
		}),
	}),
});

export const {
	useCreateUserMutation,
	useGetUserQuery,
	useUpdateUserMutation,
	useForgotPasswordMutation,
	useResetPasswordMutation,
	useLikeMovieMutation,
} = userApi;
