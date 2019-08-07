export const userTypes = {
  LOGIN_USER: "LOGIN_USER",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_ERROR: "LOGIN_USER_ERROR"
};

export const requestLogin = user => {
  return {
    type: userTypes.LOGIN_USER,
    payload: user
  };
};
