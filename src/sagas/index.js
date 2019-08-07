import { takeLatest } from "redux-saga/effects";
import { userSaga } from "./user";
import { userTypes } from "../actions/user";

export default function* root() {
  yield takeLatest(userTypes.LOGIN_USER, userSaga);
}
