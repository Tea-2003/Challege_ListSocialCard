import React from 'react'
import styles from "./style.module.css"

const index = () => {
  return (
    <div className={styles.searchUndefined}>
    <img
      src='images/img_result.svg'
      alt="error"
    />
    <div className={styles.textResult}>No Results Found</div>
    <div className={styles.message}>
      No content matched your criteria. Try searching for something else.
    </div>
  </div>


  )
}

export default index;
