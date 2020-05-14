import streams from '../api/axios';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, GET_ALL_STREAMS, UPDATE_STREAM, GET_STREAM, DELETE_STREAM } from '../types';

import history from '../history';

export const trySignIn = userId => ({ type: SIGN_IN, payload: userId });

export const trySignOut = () => ({ type: SIGN_OUT });

export const createStream = formValues => async dispatch => {
	const response = await streams.post('/streams', formValues);
	dispatch({ type: CREATE_STREAM, payload: response.data });
	history.push('/');
};

export const getAllStreams = () => async dispatch => {
	const response = await streams.get('/streams');
	dispatch({ type: GET_ALL_STREAMS, payload: response.data });
};
export const getStreamById = id => async dispatch => {
	const response = await streams.get(`/streams/${id}`);
	dispatch({ type: GET_STREAM, payload: response.data });
};

export const updateStream = (formValues, id) => async dispatch => {
	const response = await streams.patch(`/streams/${id}`, formValues);
	dispatch({ type: UPDATE_STREAM, payload: response.data });
	history.push('/');
};

export const deleteStream = id => async dispatch => {
	await streams.delete(`/streams/${id}`);

	dispatch({ type: DELETE_STREAM, payload: id });
	history.push('/');
};
