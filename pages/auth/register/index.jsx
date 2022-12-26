import React, { useState } from "react";

import Link from "next/link";
import { toast } from "react-hot-toast";

import { registerUser } from "../../../lib/authRequest";
import InputForm from "../../../components/InputForm/InputForm";
import bgImage from "../../../assets/img/signup-bg.jpg";

import { RegisterPageContainer } from "../../../styles/Register.styles";

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

    const res = await registerUser(formFields);

    if (res.status === 201) {
      toast.success("Sign up successfully!", { style: { fontSize: "20px" } });
      window.location.assign("/auth/signin");
    }
  };

  return (
    <RegisterPageContainer bgPhoto={bgImage}>
      <div className="signup">
        <div className="signup__container">
          <div className="signup__top">
            <form className="signup__form" onSubmit={sumbitHandler}>
              <h1 className="signup__heading">Create an account</h1>
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
              <button className="signup__submit" type="submit">
                Sign up
              </button>
            </form>
            <Link href="/auth/login">
              <a className="signup__haveAccount">Already have account?</a>
            </Link>
          </div>
          {/* <div className="signup__other_sign_in">
            <p className="signup__other_heading">- Or Sign In With -</p>
            <div className="signup__socials">
              <button className="signup__social_login">Google</button>
              <button className="signup__social_login">Facebook</button>
            </div>
          </div> */}
        </div>
      </div>
    </RegisterPageContainer>
  );
};

// NOT use Common Layout
Login.getLayout = (page) => <>{page}</>;

export default Login;
