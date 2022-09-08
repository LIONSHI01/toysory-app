import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

import { FaShippingFast } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineDelete,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

const index = () => {
  return (
    <div className="cart">
      <header>
        <Hero />
        <Header primary={"Shopping Cart"} secondary={"Item List"} />
      </header>
      <div className="cart__flow-container">
        <div className="cart__flow-step">
          <FaShippingFast />
          <span>Choose Shipping Method</span>
        </div>
        <div className="cart__flow-step">
          <FaShippingFast />
          <span>Fill In Info</span>
        </div>
        <div className="cart__flow-step">
          <FaShippingFast />
          <span>Finish Check Out</span>
        </div>
      </div>
      <div className="cart__shopping">
        <div className="cart__title">
          <FaShippingFast />
          <h4 className="cart__title-text">Cart Items</h4>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Specifications</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Sub Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IMAGE</td>
              <td>PRODUCT NAME</td>
              <td>SPECIFICATION</td>
              <td>HK$ 199</td>
              <td>
                <div className="cart__qty-box">
                  <div className="cart__amount">
                    <span>Amount :</span>
                    <span className="cart__minus" onClick={() => {}}>
                      <AiOutlineMinus className="cart__amountIcon" />
                    </span>
                    <input
                      type="number"
                      className="cart__number"
                      name="quantity"
                      min={1}
                      value="1"
                      onChange={() => {}}
                    />

                    <span className="cart__plus" onClick={() => {}}>
                      <AiOutlinePlus className="cart__amountIcon" />
                    </span>
                  </div>
                </div>
              </td>
              <td data-title="sub-total">HK$ 199</td>
              <td className="cart__btn-holder">
                <AiOutlineDelete />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="cart__sum-box">
          <table>
            <tfoot>
              <tr>
                <td>Item Total</td>
                <td>HK$ 299</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="cart__btn-group">
          <div className="cart__shopping-btn-box">
            <AiOutlineLeft />
            <span>Continue Shopping</span>
          </div>
          <div className="cart__shopping-btn-box">
            <span>Check Out</span>
            <AiOutlineRight />
            <SiCashapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
