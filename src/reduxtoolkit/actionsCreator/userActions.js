import { createAsyncThunk } from '@reduxjs/toolkit';

export const logIn = createAsyncThunk('login', async (username, thunkAPI) => {
	if (username) {
		sessionStorage.setItem('user', username);
	}

	return username;
});

export const logOut = createAsyncThunk('logout', async () => {
	const username = sessionStorage.getItem('user');

	if (username) {
		sessionStorage.removeItem('user');
	}

	return null;
});
