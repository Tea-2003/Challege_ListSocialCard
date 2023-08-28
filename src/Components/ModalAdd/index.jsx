import styles from "./style.module.css";
import React, { useState, useEffect } from "react";
import { updateCardData } from "../Card/dataUtils";
import axios from "axios";

const ModalAdd = ({ closeModal }) => {
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
        if (files === "avatar") {
          setAvatar(url);
        } else if (files === "images") {
          setImages(url);
        }
      }
      return url;
    }
  };

  const initialCardData = JSON.parse(localStorage.getItem("Data")) || [];

  const [cardData, setCardData] = useState(initialCardData);
  const [uploadedAvataName, setUploadedAvataName] = useState(null);
  const [uploadedImageName, setUploadedImageName] = useState(null);
  const [uploadedName, setUploadedName] = useState(null);
  const [uploadedDesciptionName, setUploadedDesciptionName] = useState(null);

  const [errorAvatar, setErrorAvatar] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  const [errorImages, setErrorImages] = useState(false);

  const [avatar, setAvatar] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleSave = (e) => {
    e.preventDefault();

    // Check for errors and set state error accordingly
    if (!avatar.length) {
      setErrorAvatar(true);
    } else {
      setErrorAvatar(false);
    }

    if (!name) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }

    if (!description) {
      setErrorDescription(true);
    } else {
      setErrorDescription(false);
    }

    if (!images.length) {
      setErrorImages(true);
    } else {
      setErrorImages(false);
    }

    // Check if there is no error then save data to localStorage
    if (!errorAvatar && !errorName && !errorDescription && !errorImages) {
      const newCard = {
        avatar: avatar,
        name: name,
        description: description,
        images: images,
        id: new Date().getTime(),
      };

      const updatedCardData = [...cardData, newCard];
      setCardData(updatedCardData);
      saveDataToLocalStorage(updatedCardData);

      updateCardData(newCard, setDataLocal, saveDataToLocalStorage);
      closeModal();
    }
  };

  // Function saveDataToLocalStorage
  const saveDataToLocalStorage = (data, images) => {
    localStorage.setItem("Data", JSON.stringify(data));

    const imageUrls = JSON.parse(localStorage.getItem("ImageUrls")) || {};
    const cardId = data[data.length - 1].id;
    imageUrls[cardId] = images;
    localStorage.setItem("ImageUrls", JSON.stringify(imageUrls));
  };

  const handleAvataUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedAvataName(file.name);
      uploadFiles([file], "avatar");
    } else {
      setAvatar([]);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDesciptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    if (files) {
      const uploadedImageNames = Array.from(files).map((file) => file.name);
      setUploadedImageName(uploadedImageNames.join(", "));
      uploadFiles(files, "images");
    } else {
      setImages([]);
    }
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
