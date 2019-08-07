import React from "react";
import css from "./DashboardPage.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../actions/user";
import { Redirect } from "react-router-dom";

const DashboardPage = ({ userStore, router }) => {
  if (!userStore.user.token) {
    return <Redirect to="/" />;
  }

  return (
    <div className={css.DashboardPage}>
      <h1>Dashboard</h1>
      <p>Congrats! You're logged in.</p>
      <p>
        <strong>Email</strong>: {userStore.user.email} <br />
        <strong>Token</strong>: {userStore.user.token} <br />
      </p>
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
)(DashboardPage);
