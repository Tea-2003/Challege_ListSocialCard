import React from "react";
import styles from "./style.module.css";

const Result = () => {
  return (
    <div className={styles.noData}>
      <img src="./images/img_result.svg" alt="img_result" />
      <div className={styles.noResult}>No Result Found</div>
      <div className={styles.noContent}>
        No content matched your criteria. Try searching for something else.
      </div>
    </div>
  );
};
export default Result;
