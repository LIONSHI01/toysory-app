import React from "react";

import classes from "./index.module.scss";

const Login = () => {
  return (
    <main className={classes.login}>
      <div className={classes.login__container}>
        <div className={classes.login__imageHolder}>&sbnp;</div>
        <div className={classes.login__form_container}>Form</div>
      </div>
    </main>
  );
};

// NOT use Common Layout
Login.getLayout = (page) => <>{page}</>;

export default Login;
