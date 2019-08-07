import { userTypes } from "../actions/user";

const INITIAL_STATE = {
  user: {
    email: "",
    token: ""
  },
  loading: false,
  error: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case userTypes.LOGIN_USER:
      return { ...state, loading: true };
    case userTypes.LOGIN_USER_SUCCESS:
      return { user: action.payload.user, loading: false, error: false };
    case userTypes.LOGIN_USER_ERROR:
      return { user: INITIAL_STATE.user, loading: false, error: true };
    default:
      return state;
  }
}
