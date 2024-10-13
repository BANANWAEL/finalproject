import React, { Component, Fragment } from "react";
import styles from "./home.module.css";
import img from "../../assets/developers.jpg";
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className={`container text-center py-5 ${styles.container1}`}>
          <h1 className={`pt-5 ${styles.h1}`}>
            Find the right Developer for you.
          </h1>
          <p className={`pt-3 ${styles.p}`}>
            With over 30,000 Developers and 1M+ clients, we know language
            learning.
          </p>
        </div>
        {/* start of be a developer section */}
        <div className={`container ${styles.container2}`}>
          <div className={`row m-5 ${styles.row}`}>
            <div className={`col-lg-6 col-md-6 col-sm-12 ${styles.muliimage}`}>
              <img
                className={`ps-5 ${styles.img1}`}
                src={img}
                alt=""
                width={"430px"}
                height={"500px"}
              />
              <img
                className={`ps-3 pt-4 ${styles.img2}`}
                src={img}
                alt=""
                width={"430px"}
                height={"470px"}
              />
              <img
                className={`pt-5 ${styles.img3}`}
                src={img}
                alt=""
                width={"430px"}
                height={"420px"}
              />
            </div>
            <div className={`col-lg-6 col-md-6 col-sm-12 ${styles.text}`}>
              <h1>Start Your Journy as a Developer With us</h1>
              <h6>Sign Up now   <i class="fa-solid fa-arrow-down"></i></h6>
              <button style={{color:"#ffff"}} type="button" class="btn btn-warning ms-5 px-3 mt-3"><i class="fa-regular fa-heart"></i></button>
            </div>
          </div>
        </div>
        {/* end of be a developer section */}
      </Fragment>
    );
  }
}
