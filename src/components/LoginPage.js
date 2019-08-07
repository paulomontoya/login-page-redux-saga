import React from "react";
import css from "./LoginPage.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../actions/user";
import LoadingSpinner from "./LoadingSpinner";

const LoginPage = ({ userStore, requestLogin }) => {
  const handleSubmit = event => {
    event.preventDefault();

    requestLogin({
      email: event.target.email.value,
      password: event.target.password.value
    });
  };

  return (
    <div className={css.LoginPage}>
      <h1>Login</h1>
      {userStore.loading ? (
        <LoadingSpinner />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoFocus={true} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  userStore: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
