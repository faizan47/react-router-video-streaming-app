import streams from '../api/axios';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, GET_ALL_STREAMS } from '../types';

export const trySignIn = userId => ({ type: SIGN_IN, payload: userId });

export const trySignOut = () => ({ type: SIGN_OUT });

export const createStream = formValues => async dispatch => {
	console.log(formValues, 'DATA');
	const response = await streams.post('/streams', formValues);
	dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const getAllStreams = () => async dispatch => {
	const response = await streams.get('/streams');
	dispatch({ type: GET_ALL_STREAMS, payload: response.data });
};
