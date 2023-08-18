import React from "react";
import styles from "./style.module.css";
import Nav from "../Nav";
import Modal from "react-modal";
import ModalAdd from "../ModalAdd";
import ModalDelete from "../ModalDelete";
import cardData from "../Data";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    border: "none",
    background: "none",
    boxshadow: "none",
    overflow: "initial",
  },
};

const Card = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openDeleteModal() {
    setModalDeleteIsOpen(true);
  }

  function closeDeleteModal() {
    setModalDeleteIsOpen(false);
  }

  return (
    <div>
      <Nav />

      <div className={styles.cards}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalAdd closeModal={closeModal}></ModalAdd>
        </Modal>

        <Modal
          isOpen={modalDeleteIsOpen}
          onRequestClose={closeDeleteModal}
          style={customStyles}
          contentLabel="Delete Modal"
        >
          <ModalDelete closeModal={closeDeleteModal}></ModalDelete>
        </Modal>

        {cardData.map((card) => (
          <div key={card.id} className={styles.cardItem}>
            <div className={styles.item}>
              <a href="/Detail">
                <div className={styles.avata}>
                  <img src={card.avatar} alt="a" />
                </div>
                <div className={styles.nameDate}>
                  <div className={styles.name}>{card.name}</div>
                  <div className={styles.date}>{card.date}</div>
                </div>
              </a>
              <div className={styles.iconED}>
                <div className={styles.edit}>
                  <img
                    onClick={openModal}
                    src="./images/icon_edit.svg"
                    alt="icon_edit"
                  />
                </div>
                <div className={styles.delete}>
                  <img
                    onClick={openDeleteModal}
                    src="./images/icon_delete.svg"
                    alt="icon_delete"
                  />
                </div>
              </div>
            </div>
            <a href="/Detail">
              <div className={styles.subTitle}>{card.subTitle}</div>
              <div className={styles.images}>
                <img src={card.image} alt="image" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
