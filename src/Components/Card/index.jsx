import React, { useState } from "react";
import styles from "./style.module.css";
import { getLocalData } from "../Data";
import Modal from "react-modal";
import ModalUpdate from "../ModalUpdate";
import ModalDelete from "../ModalDelete";
import { format } from "date-fns";
import NotFound from "../NotFound";
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
    boxShadow: "none",
    background: "none",
  },
};

const Index = ({ searchTerm }) => {
  const dataLocal = getLocalData();

  //Search
  const filteredData = dataLocal.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = React.useState(false); // Add state for delete modal
  const [editedData, setEditedData] = useState(null);
  

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

  const [deleteIndex, setDeleteIndex] = React.useState(null);
  const handleDeleteContent = async (index) => {
    // Make a copy of the dataLocal array so that it doesn't affect the state directly
    const newDataLocal = [...dataLocal];
    newDataLocal.splice(index, 1);

    // Update Local Storage with array newDataLocal
    localStorage.setItem("cardData", JSON.stringify(newDataLocal));

    // Update dataLocal state to cause page re-rendering
    setDeleteIndex(newDataLocal);

    closeDeleteModal();
  };

  return (
    <div className={styles.body}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <ModalUpdate
          closeModal={closeModal}
          editedData={editedData}
        ></ModalUpdate>
      </Modal>

      <Modal
        isOpen={modalDeleteIsOpen}
        onRequestClose={closeDeleteModal}
        style={customStyles}
        contentLabel='Delete Modal'
      >
        <ModalDelete
          closeModal={closeDeleteModal}
          deleteContent={() => handleDeleteContent(deleteIndex)}
        ></ModalDelete>
      </Modal>
      
      <div className={styles.body}>
        {filteredData.length === 0 && searchTerm !== "" ? (
          <NotFound />
        ) : (
          filteredData.map((item, index) => (
            <div
              className={styles.card}
              key={index}
            >
              <div className={styles.header}>
                <a href='./Detail'>
                  <div className={styles.profile}>
                    <img
                      src={item.Profile}
                      alt={item.Name}
                    />
                    <div>
                      <div className={styles.name}>{item.name} </div>
                      <div className={styles.birthday}>
                        {format(new Date(), "dd/MM/yyyy")}
                      </div>
                    </div>
                  </div>
                </a>
                <div className={styles.icon}>
                  <div className={styles.editIcon}>
                    <img
                      onClick={() => {
                        setEditedData(item);
                        openModal();
                      }}
                      src='images/icon_edit.svg'
                      alt='Edit'
                    />
                  </div>
                  <div className={styles.deleteIcon}>
                    <img
                      onClick={() => {
                        openDeleteModal(); 
                        setDeleteIndex(index);
                      }}
                      src='images/icon_delete.svg'
                      alt='Delete'
                    />
                  </div>
                </div>
              </div>
              <a href='./Detail'>
                <div
                  className={`${styles.description} ${
                    index === 2 ? styles.descriptionMio : ""
                  }`}
                >
                  {item.description}
                </div>
                <div className={styles.img}>
                  <img
                    src={item.img}
                    alt='img'
                  />
                </div>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Index;
