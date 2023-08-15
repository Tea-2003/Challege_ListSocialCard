import React, { Component } from "react";
import styles from './addStyle.module.css';

const ModalAddComponent = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.title}>Add new card</div>
      <div className={styles.form}>
        <div className={styles.avata}>
          <div className={styles.avt}>Avata*</div>
          <div className={styles.uploading}>
            <img src="./images/icon_arrow.svg" alt="" />
            <span>Upload image</span>
          </div>
        </div>
        <div className={styles.avata}>
          <div className={styles.avt}>Name*</div>
          <div className={styles.uploading}>
            <input type="text" />
          </div>
        </div>
        <div className={styles.avata}>
          <div className={styles.avt}>Description*</div>
          <div className={styles.uploadingTextarea}>
            <textarea type="text" defaultValue={""} />
          </div>
        </div>
        <div className={styles.avata}>
          <div className={styles.avt}>Image*</div>
          <div className={styles.uploading}>
            <img src="./images/icon_arrow.svg" alt="" />
            <span>Upload image</span>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.btnSave}>Save</div>
          <div className={styles.btnCancel}>Cancel</div>
        </div>
      </div>
    </div>
  );
};
export default ModalAddComponent;
