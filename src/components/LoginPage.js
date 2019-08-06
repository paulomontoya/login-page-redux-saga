import React from "react";
import css from "./LoginPage.module.scss";

const LoginPage = props => {
  return (
    <div className={css.LoginPage}>
      <h1>Login</h1>
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
    </div>
  );
};

const handleSubmit = event => {
  event.preventDefault();

  console.log(event.target.email.value);
  console.log(event.target.password.value);
};

export default LoginPage;
