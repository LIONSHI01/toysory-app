import React from "react";
import Link from "next/link";

import { BsCheckCircleFill } from "../../components/ReactIcons/index";

import classes from "./index.module.scss";

const SuccessPage = () => {
  return (
    <div className="container">
      <main className={classes.success}>
        <div className={classes.success__iconBox}>
          <BsCheckCircleFill className={classes.success__icon} />
        </div>
        <h1 className={classes.success__heading}>Order confirmed</h1>
        <p className={classes.success__msg}>
          Your order is confirmed.You will receive an order confirmation email
          <br />
          shortly with the expected delivery date for your items.
        </p>
        <div className={classes.success__btns}>
          <Link href="/product">
            <a className={classes.success__btn_shopping}>Continue Shopping</a>
          </Link>
          <Link href="/">
            <a className={classes.success__btn_order}>View Order</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SuccessPage;
