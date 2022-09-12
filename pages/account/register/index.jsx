import React, { useState } from "react";
import Link from "next/link";

import { toast } from "react-hot-toast";

import { registerUser } from "../../../lib/authRequest";
import InputForm from "../../../components/InputForm/InputForm";

import classes from "./index.module.scss";

const INITIAL_FORM_FIELDS = {
  email: "",
  password: "",
  passwordConfirm: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(INITIAL_FORM_FIELDS);
  const { email, password, passwordConfirm } = formFields;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const sumbitHandler = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("Invalid Password Input");
      return;
    }

    await registerUser(formFields);
    toast.success(`Added to Cart!`, {
      style: { fontSize: "20px" },
    });
  };

  return (
    <main className={classes.signup}>
      <div className={classes.signup__container}>
        <div className={classes.signup__top}>
          <form className={classes.signup__form} onSubmit={sumbitHandler}>
            <h1 className={classes.signup__heading}>Create an account</h1>
            <InputForm
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={onChangeHandler}
            />
            <InputForm
              type="password"
              name="password"
              placeholder="Password"
              required
              minLength="8"
              value={password}
              onChange={onChangeHandler}
            />
            <InputForm
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              required
              minLength="8"
              value={passwordConfirm}
              onChange={onChangeHandler}
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
