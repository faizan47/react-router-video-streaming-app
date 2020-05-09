import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const INITIAL_STATE = {
	isSignedIn: null,
	userId: null
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return { ...state, isSignedIn: true, userId: action.payload };
		case 'SIGN_OUT':
			return { isSignedIn: false };
		default:
			return state;
	}
};

export default combineReducers({ auth: authReducer, form: formReducer });
