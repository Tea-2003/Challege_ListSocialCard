import React from "react";
import styles from "./navStyle.module.css";

const NavigationComponent = () => {
 
  return (
    <div className={styles.navigation}>
      <div className={styles.btn}>Add New</div>
      <div className={styles.search}>
        <input type="text" placeholder="Search Name..." />
        <span>
          <img src="images/icon_search.svg" alt />
        </span>
      </div>
    </div>

  );
};

export default NavigationComponent;
