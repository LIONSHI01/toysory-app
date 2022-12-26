import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import Router from "next/router";
import Link from "next/link";

import { InputForm } from "../../../components";
import { SigninPageContainer } from "../../../styles/Signin.styles";

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
    <SigninPageContainer>
      <div className="login">
        <div className="login__container">
          <div className="login__top">
            <form className="login__form" onSubmit={submithandler}>
              <h1 className="login__heading">Have an account?</h1>
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
              <button className="login__submit" type="submit">
                Log in
              </button>
            </form>
            <div className="login__links">
              <Link href="/auth/register">
                <a className="login__createAccount">Create an account?</a>
              </Link>
              {/* <Link href="/auth/forget">
                <a className="login__forget">Forget Password</a>
              </Link> */}
            </div>
          </div>
          {/* <div className="login__other_sign_in">
            <p className="login__other_heading">- Or Sign In With -</p>
            <div className="login__socials">
              <button className="login__social_login">Google</button>
              <button className="login__social_login">Facebook</button>
            </div>
          </div> */}
        </div>
      </div>
    </SigninPageContainer>
  );
};

// NOT use Common Layout
Login.getLayout = (page) => <>{page}</>;

export default Login;
