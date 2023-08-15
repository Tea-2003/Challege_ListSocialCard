import React from "react";
import styles from "./resultStyle.module.css";

const ResultComponent = () => {
  return (
<div className={styles.noData}>
        <img src="./images/img_result.svg" alt="" />
        <div className={styles.noResult}>no result found</div>
        <div className={styles.noContent}>
          No content matched your criteria. Try searching for something else.
        </div>
      </div>
  );
}
export default ResultComponent;