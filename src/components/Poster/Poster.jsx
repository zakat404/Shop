import React from 'react';

import styles from "../../Styles/Home.module.css";
import BG from "../../images/computer.png";

 const Poster = () => {
  return (
    <section className={styles.home}>
        <div className={styles.title}>BIg SALE 20%</div>
        <div className={styles.product}>
            <div className={styles.text}>
                <div className={styles.subtitle}>Best seller of year</div>
                <h1 className={styles.head}> LENNON r2d2 with NVIDIA 5090 TI </h1>
                <button className={styles.button}>Shop Now</button>
            </div>
            <div className={styles.image}>
                <img src={BG} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Poster;