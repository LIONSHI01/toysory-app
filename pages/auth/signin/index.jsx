import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import Router from "next/router";
import Link from "next/link";

import InputForm from "../../../components/InputForm/InputForm";
import classes from "./index.module.scss";

const INITIAL_FORM_FIELDS = {
  email: "",
  password: "",
};

const Login = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") Router.replace("/account");
  }, [status]);

  const [formFields, setFormFields] = useState(INITIAL_FORM_FIELDS);
  const { email, password } = formFields;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <main className={classes.login}>
      <div className={classes.login__container}>
        <div className={classes.login__top}>
          <form className={classes.login__form} onSubmit={submithandler}>
            <h1 className={classes.login__heading}>Have an account?</h1>
            <InputForm
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChangeHandler}
            />
            <InputForm
              type="password"
              placeholder="Password"
              minLength="8"
              name="password"
              value={password}
              onChange={onChangeHandler}
            />
            <button className={classes.login__submit} type="submit">
              Log in
            </button>
          </form>
          <div className={classes.login__links}>
            <Link href="/auth/register">
              <a className={classes.login__createAccount}>Create an account?</a>
            </Link>
            <Link href="/auth/forget">
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
