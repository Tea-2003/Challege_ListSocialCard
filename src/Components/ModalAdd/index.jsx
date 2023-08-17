import React from "react";
import styles from "./style.module.css";

const ModalAdd = ({ closeModal }) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.title}>Add new card</div>
        <div className={styles.cardAdd}>
          <div className={styles.bodyCard}>
            <div className={styles.avata}>
              <div className={styles.avt}>Avata*</div>
              <div className={styles.uploading}>
                <img src="./images/icon_arrow.svg" alt="icon_arrow" />
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
                <img src="./images/icon_arrow.svg" alt="icon_arrow" />
                <span>Upload image</span>
              </div>
            </div>
          </div>

          <div className={styles.button}>
            <div className={styles.btnSave}>Save</div>
            <div className={styles.btnCancel} onClick={closeModal}>
              Cancel
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalAdd;
