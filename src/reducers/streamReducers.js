import { CREATE_STREAM, GET_STREAM, UPDATE_STREAM, GET_ALL_STREAMS } from '../types';
import { mapKeys } from 'lodash';

export const streamReducers = (state = {}, action) => {
	if (action.type === CREATE_STREAM || action.type === UPDATE_STREAM || action.type === GET_STREAM) {
		return { ...state, streamInfo: action.payload };
	} else if (action.type === GET_ALL_STREAMS) {
		console.log({ ...mapKeys(action.payload, 'id') });

		return { ...state, ...mapKeys(action.payload, 'id') };
	} else {
		return state;
	}
};
