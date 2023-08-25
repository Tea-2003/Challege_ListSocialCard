import styles from "./style.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ModalAdd = ({ closeModal, setCardData, cardData }) => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const profileImg = document.getElementById("profile-img");
    console.log("Form element:", form);
    console.log("Profile image element:", profileImg);

    if (form && profileImg) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        uploadFiles(profileImg.files);
      });
    }
  }, []);

  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dn7lgsdd1";
      const PRESET_NAME = "upload-img";
      const url = [];
      const FOLDER_NAME = "SOCIAL";
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData();

      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);

        const response = await axios.post(api, formData, {
          headers: {
            "content-Type": "multipart/form-data",
          },
        });
        url.push(response.data.secure_url);
        console.log(url);
      }
      return url;
    }
  };

  // const [uploadedAvataName, setUploadedAvataName] = useState(null);
  // const [uploadedImageName, setUploadedImageName] = useState(null);
  // const [uploadedName, setUploadedName] = useState(null);
  // const [uploadedDesciptionName, setUploadedDesciptionName] = useState(null);

  // const [imagePreview, setImagePreview] = useState(null);

  // const [hasUploadedAvata, setHasUploadedAvata] = useState(false);
  // const [hasUploadedImage, setHasUploadedImage] = useState(false);
  // const [hasUploadedName, setHasUploadedName] = useState(true);
  // const [hasUploadedDesciption, setHasUploadedDesciption] = useState(true);

  // const [avatar, setAvatar] = useState(null);
  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const [images, setImages] = useState([]);
  // const [nameError, setNameError] = useState(false);

  // const handleAvataUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setUploadedAvataName(file.name);
  //     setHasUploadedAvata(true);
  //     setImagePreview(e.target.result);
  //   } else {
  //     setHasUploadedAvata(false);
  //   }
  // };

  // const handleNameChange = (e) => {
  //   const newName = e.target.value;
  //   setHasUploadedName(newName.trim() !== "");
  //   setNameError(newName === "");

  //   setName(newName);
  // };

  // const handleDesciptionName = (e) => {
  //   const newDescription = e.target.value;
  //   setHasUploadedDesciption(newDescription.trim() !== "");
  //   setDescriptionError(newDescription === "");
  // };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setUploadedImageName(file.name);
  //     setHasUploadedImage(true);
  //     setImagePreview(e.target.result);
  //   } else {
  //     setHasUploadedImage(false);
  //   }
  // };

  // const handleImagesChange = (e) => {
  //   const uploadedImages = e.target.files;
  //   setImages(uploadedImages);
  // };

  // const handleValidation = () => {
  //   setNameError(name === '');
  // };

  // const handleSave = async () => {
  //   setNameError(name === "");
  //   setDescriptionError(description === "");

  //   if (
  //     !name ||
  //     !description ||
  //     !uploadedImageNameProfile ||
  //     !uploadedImageNameContent
  //   ) {
  //     return;
  //   }
  // }

  const [uploadedAvataName, setUploadedAvataName] = useState(null);
  const [uploadedImageName, setUploadedImageName] = useState(null);
  const [uploadedName, setUploadedName] = useState(null);
  const [uploadedDesciptionName, setUploadedDesciptionName] = useState(null);

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleAvataUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedAvataName(file.name);
      setAvatar(true);
    } else {
      setAvatar(false);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDesciptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImageName(file.name);
      setImages(true);
    } else {
      setImages(false);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    const newCard = {
      avatar: avatar.map((avatar) => avatar.name),
      name: name,
      description: description,
      images: images.map((images) => images.name),
      id: new Date().getTime(),
    };

    setCardData([...cardData, newCard]);
    closeModal();
  };

  return (
    <form action="" id="form-add">
      <div className={styles.modal}>
        <div className={styles.title}>Add new card</div>
        <div className={styles.cardAdd}>
          <div className={styles.bodyCard}>
            <div className={styles.avata}>
              <div
                className={`${styles.avt} ${!avatar ? styles.errorText : ""}`}
              >
                Avatar*
              </div>
              <div className={styles.uploading}>
                <label
                  htmlFor="profile-img"
                  className={`${styles.uploadLabel} ${
                    !avatar ? styles.errorText : ""
                  }`}
                >
                  {uploadedAvataName ? (
                    <>
                      <span>{uploadedAvataName}</span>
                    </>
                  ) : (
                    <>
                      <img
                        src="./images/icon_arrow.svg"
                        alt="icon_arrow"
                        required
                      />
                      <span>Upload image</span>
                    </>
                  )}
                </label>
                <input
                  className={styles.uploadingInput}
                  type="file"
                  id="profile-img"
                  onChange={handleAvataUpload}
                  required
                />
              </div>
            </div>

            <div className={styles.avata}>
              <div className={`${styles.avt} ${!name ? styles.errorName : ""}`}>
                Name*
              </div>
              <div className={styles.uploading}>
                <input type="text" onChange={handleNameChange} required />
              </div>
            </div>

            <div className={styles.avataTextarea}>
              <div
                className={`${styles.avt} ${
                  !description ? styles.errorName : ""
                }`}
              >
                Description*
              </div>
              <div className={styles.uploadingTextarea}>
                <textarea
                  type="text"
                  onChange={handleDesciptionChange}
                  required
                />
              </div>
            </div>

            <div className={styles.avata}>
              <div
                className={`${styles.avt} ${!images ? styles.errorText : ""}`}
              >
                Image*
              </div>
              <div className={styles.uploading}>
                <label
                  htmlFor="profile-img"
                  className={`${styles.uploadLabel} ${
                    !images ? styles.errorText : ""
                  }`}
                >
                  {uploadedImageName ? (
                    <span>{uploadedImageName}</span>
                  ) : (
                    <>
                      <img
                        src="./images/icon_arrow.svg"
                        alt="icon_arrow"
                        required
                      />
                      <span>Upload image</span>
                    </>
                  )}
                </label>
                <input
                  className={styles.uploadingInput}
                  type="file"
                  id="profile-img"
                  onChange={handleImageUpload}
                  multiple
                />
              </div>
            </div>
          </div>

          <div className={styles.button}>
            <button
              type="submit"
              className={styles.btnSave}
              onClick={handleSave}
            >
              Save
            </button>
            <div className={styles.btnCancel} onClick={closeModal}>
              Cancel
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ModalAdd;
