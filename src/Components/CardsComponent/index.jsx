import React from "react";
import styles from "./cardStyle.module.css";

const CardsComponent = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.cardItem}>
        <div className={styles.item}>
          <div className={styles.avata}>
            <img src="./images/avt_person.svg" alt="a" />
          </div>
          <div className={styles.nameDate}>
            <div className={styles.name}>Berry</div>
            <div className={styles.date}>14/07/2023</div>
          </div>
          <div className={styles.iconED}>
            <div className={styles.edit}>
              <img src="./images/icon_edit.svg" alt="" />
            </div>
            <div className={styles.delete}>
              <img src="./images/icon_delete.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.subTitle}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
        <div className={styles.images}>
          <img src="./images/img_cat.svg" alt="image" />
        </div>
      </div>

      <div className={styles.cardItem}>
        <div className={styles.item}>
          <div className={styles.avata}>
            <img src="./images/avt_person.svg" alt="a" />
          </div>
          <div className={styles.nameDate}>
            <div className={styles.name}>Varen</div>
            <div className={styles.date}>14/07/2023</div>
          </div>
          <div className={styles.iconED}>
            <div className={styles.edit}>
              <img src="./images/icon_edit.svg" alt="" />
            </div>
            <div className={styles.delete}>
              <img src="./images/icon_delete.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.subTitle}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
        <div className={styles.images}>
          <img src="./images/img_baby.svg" alt="image" />
        </div>
      </div>

      <div className={styles.cardItem}>
        <div className={styles.item}>
          <div className={styles.avata}>
            <img src="./images/avt_person.svg" alt="a" />
          </div>
          <div className={styles.nameDate}>
            <div className={styles.name}>Mio</div>
            <div className={styles.date}>14/07/2023</div>
          </div>
          <div className={styles.iconED}>
            <div className={styles.edit}>
              <img src="./images/icon_edit.svg" alt="" />
            </div>
            <div className={styles.delete}>
              <img src="./images/icon_delete.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.subTitle}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
        <div className={styles.images}>
          <img src="./images/img_elephant.svg" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;