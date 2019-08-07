import { put, call } from "redux-saga/effects";
import { userTypes } from "../actions/user";
import { loginService } from "../services/user";
import { history } from "../store";

export function* userSaga(payload) {
  try {
    const response = yield call(loginService, payload);

    yield put({
      type: userTypes.LOGIN_USER_SUCCESS,
      payload: { user: response.user }
    });

    history.push("/dashboard");
  } catch (err) {
    yield put({ type: userTypes.LOGIN_USER_ERROR });
  }
}
