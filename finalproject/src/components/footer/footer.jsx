import React, { Component, Fragment } from "react";
import img from "../../assets/logoo.png";
import styles from "./footer.module.css";
export default class Footer extends Component {
  render() {
    return (
      <Fragment >
        <div className={`footercontainer p-3 ${styles.main}`}>
            <div className={`container text-center ${styles.container}`}>
            <div className="icon ">
                <img src={img} alt="" width={"100px"} height={"100px"} />
            </div>
            <div className={`${styles.links}`}>
                <a className={`${styles.link}`} href="/">Home</a>
                <a className={`${styles.link}`} href="/">Start</a>
                <a className={`${styles.link}`} href="/">Location</a>
                <a className={`${styles.link}`} href="/">Contact Us</a>
            </div>
            <ul className={` ${styles.icons}`}>
                <a className={`${styles.icon}`} href="/"><i class="fa-brands fa-whatsapp"></i></a>
                <a className={`${styles.icon}`} href="/"><i class="fa-brands fa-facebook"></i></a>
                <a className={`${styles.icon}`} href="/"><i class="fa-brands fa-twitter"></i></a>
                <a className={`${styles.icon}`} href="/"><i class="fa-brands fa-instagram"></i></a>
                <a className={`${styles.icon}`} href="/"><i class="fa-brands fa-linkedin"></i></a>
            </ul>
            <p>Copyright &copy;2024; Designed by <span className="designer">Team.1</span> </p>

            </div>
        </div>
      </Fragment>
    );
  }
}
