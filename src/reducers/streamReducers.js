import { CREATE_STREAM, GET_STREAM, UPDATE_STREAM, GET_ALL_STREAMS, DELETE_STREAM } from '../types';
import { mapKeys } from 'lodash';
import { omit } from 'lodash';

export const streamReducers = (state = {}, action) => {
	switch (action.type) {
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case UPDATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case GET_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return omit(state, action.payload);
		case GET_ALL_STREAMS:
			return { ...state, ...mapKeys(action.payload, 'id') };
		default:
			return state;
	}
};
