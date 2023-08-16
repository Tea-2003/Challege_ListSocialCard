
import styles from "./style.module.css";

const ModalAdd = () => {
  
  // let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  return (
<>
    {/* <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div> */}
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
          <div className={styles.btnCancel}>Cancel</div>
        </div>
      </div>
    </div>
    </>
  );
};
export default ModalAdd;
