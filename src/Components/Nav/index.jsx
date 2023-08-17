import React from "react";
import styles from "./styles.module.css";
import Modal from "react-modal";
import ModalAdd from "../ModalAdd";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    border: "0px",
    background: "none",
  },
};
const Nav = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalAdd closeModal={closeModal}></ModalAdd>
      </Modal>
      <div className={styles.header}>
        <div className={styles.title}>list social card</div>
      </div>

      <div className={styles.navigation}>
        <div className={styles.btn} onClick={openModal}>
          Add New
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search Name..." />
          <span>
            <img src="images/icon_search.svg" alt="icon_search" />
          </span>
        </div>
      </div>
    </>
  );
};
export default Nav;
