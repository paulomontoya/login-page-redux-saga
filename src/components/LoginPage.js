import React from "react";
import css from "./LoginPage.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../actions/user";
import LoadingSpinner from "./LoadingSpinner";
import { useTransition, animated } from "react-spring";

const LoginPage = ({ userStore, requestLogin }) => {
  const handleSubmit = event => {
    event.preventDefault();

    requestLogin({
      email: event.target.email.value,
      password: event.target.password.value
    });
  };

  const isLoading = userStore.loading;
  const transitions = useTransition(isLoading, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div className={css.LoginPage}>
      <div className={css.FormWrapper}>
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div
              style={props}
              key={key}
              className={css.FormLoadingWrapper}
            >
              <LoadingSpinner />
            </animated.div>
          ) : (
            <animated.div style={props} key={key}>
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoFocus={true}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div>
                  <button>Login</button>
                </div>
              </form>
            </animated.div>
          )
        )}
      </div>
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
