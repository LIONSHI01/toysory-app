import React from "react";
import Link from "next/link";

import InputForm from "../../../components/InputForm/InputForm";

import classes from "./index.module.scss";

const Login = () => {
  return (
    <main className={classes.login}>
      <div className={classes.login__container}>
        <div className={classes.login__top}>
          <form className={classes.login__form}>
            <h1 className={classes.login__heading}>Have an account?</h1>
            <InputForm type="email" placeholder="Email" />
            <InputForm type="password" placeholder="Password" minLength="8" />
            <button className={classes.login__submit} type="submit">
              Log in
            </button>
          </form>
          <div className={classes.login__links}>
            <Link href="/account/register">
              <a className={classes.login__createAccount}>Create an account?</a>
            </Link>
            <Link href="/account/forget">
              <a className={classes.login__forget}>Forget Password</a>
            </Link>
          </div>
        </div>
        <div className={classes.login__other_sign_in}>
          <p className={classes.login__other_heading}>- Or Sign In With -</p>
          <div className={classes.login__socials}>
            <button className={classes.login__social_login}>Google</button>
            <button className={classes.login__social_login}>Facebook</button>
          </div>
        </div>
      </div>
    </main>
  );
};

// NOT use Common Layout
Login.getLayout = (page) => <>{page}</>;

export default Login;
