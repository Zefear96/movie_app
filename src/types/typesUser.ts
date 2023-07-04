export type ArgRegisterUser = {
	application_key: string;
	username: string;
	password: string;
	email: string;
};

export type User = {
	application_key: string;
	username: string;
	password: string;
	email: string;
};

export type ArgUpdateUser = {
	user_key: string;
	application_key: string;
	about_text: string;
	avatar_image: File;
};

export type ArgUserDetails = {
	user_id: string;
};
