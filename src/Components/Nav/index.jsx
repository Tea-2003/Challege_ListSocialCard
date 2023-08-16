import React from "react";
import styles from "./styles.module.css";
const Nav = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>list social card</div>
      </div>

      <div className={styles.navigation}>
        <div className={styles.btn} >
          Add New
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search Name..." />
          <span>
            <img src="images/icon_search.svg" alt="icon_search" />
          </span>
        </div>
      </div>
    </>
  );
};
export default Nav;
