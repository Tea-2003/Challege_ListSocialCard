import React from "react";
import styles from "./style.module.css";
import Nav from "../Nav";
import Modal from "react-modal";
import ModalAdd from "../ModalAdd";
import ModalDelete from "../ModalDelete";

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
      <a href="/Detail">
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

          <div
            className={styles.cardItem}
            onClick={() => {
              window.location.href = "/Detail";
            }}
          >
            <div className={styles.item}>
              <div className={styles.avata}>
                <img src="./images/avt_person.svg" alt="a" />
              </div>
              <div className={styles.nameDate}>
                <div className={styles.name}>Phu</div>
                <div className={styles.date}>14/07/2023</div>
              </div>
              <div className={styles.iconED}>
                <a href="/ModalAdd">
                  <div className={styles.edit}>
                    <img
                      onClick={openModal}
                      src="./images/icon_edit.svg"
                      alt="icon_edit"
                    />
                  </div>
                </a>
                <a href="/ModalDelete">
                  <div className={styles.delete}>
                    <img
                      onClick={openDeleteModal}
                      src="./images/icon_delete.svg"
                      alt="icon_delete"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.subTitle}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
            <div className={styles.images}>
              <img src="./images/img_cat.svg" alt="image" />
            </div>
          </div>

          <div className={styles.cardItem}>
            <div className={styles.item}>
              <div className={styles.avata}>
                <img src="./images/avt_veren.svg" alt="a" />
              </div>
              <div className={styles.nameDate}>
                <div className={styles.name}>Varen</div>
                <div className={styles.date}>14/07/2023</div>
              </div>
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
            <div className={styles.subTitle}>
              Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các
              thông tin: Avatar, Name, Description, Image
            </div>
            <div className={styles.images}>
              <img src="./images/img_baby.svg" alt="image" />
            </div>
          </div>

          <div className={styles.cardItem}>
            <div className={styles.item}>
              <div className={styles.avata}>
                <img src="./images/avt_mio.svg" alt="mio" />
              </div>
              <div className={styles.nameDate}>
                <div className={styles.name}>Mio</div>
                <div className={styles.date}>14/07/2023</div>
              </div>
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
            <div className={styles.subTitle}>
              Next, you select one property. It doesn’t matter which one you
              choose, yet it’s best to pick one that seems totally unrelated to
              your challenge.
            </div>
            <div className={styles.images}>
              <img src="./images/img_elephant.svg" alt="image" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
