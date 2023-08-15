import React, { Component } from 'react';
import styles from './detailStyles.module.css'
const ModalDeleteComponent = () => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>SOCIAL CARD DETAIL</div>
            <div className={styles.cardItem}>
                <div className={styles.item}>
                    <div className={styles.avata}>
                        <div className={styles.avt}>
                            <img src="./images/avt_veren.svg" alt="" />
                        </div>
                        <div className={styles.nameDate}>
                            <div className={styles.name}>Binance</div>
                            <div className={styles.date}>22/04/2021 (day create)</div>
                        </div>
                    </div>
                </div>
                <div className={styles.subTitle}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more- or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>

                <div className={styles.images}>
                    <img src="./images/.svg" alt="image" />
                </div>
                <div className={styles.icon}>
                    <div className={styles.iconHeart}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.iconLike}>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
}


export default ModalDeleteComponent;

