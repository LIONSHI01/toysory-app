import React from "react";
import Link from "next/link";

import InputForm from "../../../components/InputForm/InputForm";

import classes from "./index.module.scss";

const Login = () => {
  return (
    <main className={classes.signup}>
      <div className={classes.signup__container}>
        <div className={classes.signup__top}>
          <form className={classes.signup__form}>
            <h1 className={classes.signup__heading}>Create an account</h1>
            <InputForm type="email" placeholder="Email" />
            <InputForm type="password" placeholder="Password" minLength="8" />
            <InputForm
              type="password"
              placeholder="Confirm Password"
              minLength="8"
            />
            <button className={classes.signup__submit} type="submit">
              Sign up
            </button>
          </form>
          <Link href="/account/login">
            <a className={classes.signup__haveAccount}>Already have account?</a>
          </Link>
        </div>
        <div className={classes.signup__other_sign_in}>
          <p className={classes.signup__other_heading}>- Or Sign In With -</p>
          <div className={classes.signup__socials}>
            <button className={classes.signup__social_login}>Google</button>
            <button className={classes.signup__social_login}>Facebook</button>
          </div>
        </div>
      </div>
    </main>
  );
};

// NOT use Common Layout
Login.getLayout = (page) => <>{page}</>;

export default Login;
