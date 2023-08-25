import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Nav from "../Nav";
import Modal from "react-modal";
import ModalAdd from "../ModalAdd";
import ModalDelete from "../ModalDelete";
import { getLocalData } from "../Data";
import { format } from "date-fns";

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
  const [localData, setDataLocal] = useState(
    JSON.parse(localStorage.getItem('Data')) || []
  );
  // const [localData, setDataLocal] = useState(getLocalData());
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = React.useState(false);
  const [editedData, setEditedData] = useState(null);
  const [deleteIndex, setDeleteIndex] = React.useState(null);

  const updateCardData = (newCard) => {
    const updatedData = [...localData, newCard];
    setDataLocal(updatedData);
    saveDataToLocalStorage(updatedData);
  };

  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("Data", JSON.stringify(data));
  };

  const handleDeleteContent = (index) => {
    // Make a copy of the dataLocal array so that it doesn't affect the state directly
    const newDataLocal = [...localData];
    newDataLocal.splice(index, 1);

    // Update Local Storage with array newDataLocal
    localStorage.setItem("Data", JSON.stringify(localData));

    // Update dataLocal state to cause page re-rendering
    setDataLocal(newDataLocal);
    closeDeleteModal();
  };

  const handleSave = (newCard) => {
    const updatedData = [...localData, newCard];
    setDataLocal(updatedData);
    // Save updated data to localStorage using card.id as the key
    localStorage.setItem("Data", JSON.stringify([...localData, newCard]));

    closeModal();
  };

  // useEffect(() => {
  //   saveDataToLocalStorage(localData);
  // }, [localData]);
  useEffect(() => {
    // Lưu dữ liệu vào LocalStorage khi component unmount
    localStorage.setItem("Data", JSON.stringify(localData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localData]);

  // function Modal
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
          <ModalAdd
            closeModal={closeModal}
            editedData={editedData}
            handleSave={handleSave} // Pass the handleSave function to ModalAdd
          ></ModalAdd>
        </Modal>

        <Modal
          isOpen={modalDeleteIsOpen}
          onRequestClose={closeDeleteModal}
          style={customStyles}
          contentLabel="Delete Modal"
        >
          <ModalDelete
            closeModal={closeDeleteModal}
            deleteContent={() => handleDeleteContent(deleteIndex)}
          ></ModalDelete>
        </Modal>

        {localData.map((card) => (
          <div key={card.id} className={styles.cardItem}>
            <div className={styles.item}>
              <a href="/Detail">
                <div className={styles.avata}>
                  <img src={card.avatar} alt={card.name} />
                </div>
                <div className={styles.nameDate}>
                  <div className={styles.name}>{card.name}</div>
                  <div className={styles.date}>
                    {/* {card.date} */}
                    {format(new Date(), "dd/MM/yyyy")}
                  </div>
                </div>
              </a>
              <div className={styles.iconED}>
                <div className={styles.edit}>
                  <img
                    onClick={() => {
                      setEditedData(card);
                      openModal();
                    }}
                    src="./images/icon_edit.svg"
                    alt="edit"
                  />
                </div>
                <div className={styles.delete}>
                  <img
                    onClick={() => {
                      setDeleteIndex(card.id);
                      openDeleteModal();
                    }}
                    src="./images/icon_delete.svg"
                    alt="icon_delete"
                  />
                </div>
              </div>
            </div>
            <a href="/Detail">
              <div className={styles.subTitle}>{card.description}</div>
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
