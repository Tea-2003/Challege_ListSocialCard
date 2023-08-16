import React from "react";
import styles from "./style.module.css";

const Navigation = () => {
 
  return (
    <div className={styles.navigation}>
      <div className={styles.btn}>Add New</div>
      <div className={styles.search}>
        <input type="text" placeholder="Search Name..." />
        <span>
          <img src="images/icon_search.svg" alt="icon_search" />
        </span>
      </div>
    </div>

  );
};

export default Navigation;
