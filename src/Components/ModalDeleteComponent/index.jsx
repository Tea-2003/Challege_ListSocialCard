import styles from "./deleteStyles.module.css";

const ModalDeleteComponent = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.cardDelete}>
        <div className={styles.title}>Your about to delete a item</div>
        <div className={styles.bodyCard}>
          <div className={styles.iconDelete}>
            <img src="./images/icon_delete.svg" alt="" />
          </div>
          <div className={styles.subTitle}>
            This will delete your item form list Are you sure?
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.btnSave}>Delete</div>
        <div className={styles.btnCancel}>Cancel</div>
      </div>
    </div>
  );
};

export default ModalDeleteComponent;
