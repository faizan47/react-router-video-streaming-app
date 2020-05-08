export const trySignIn = userId => ({ type: 'SIGN_IN', payload: userId });

export const trySignOut = () => ({ type: 'SIGN_OUT' });
