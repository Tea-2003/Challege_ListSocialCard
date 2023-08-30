import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const Index = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedImageNameProfile, setUploadedImageNameProfile] =
    useState(null);
  const [hasUploadedProfile, setHasUploadedProfile] = useState(false);
  const [uploadedImageNameContent, setUploadedImageNameContent] =
    useState(null);
  const [hasUploadedContent, setHasUploadedContent] = useState(false);

  const handleImageUploadProfile = (e) => {
    console.log("Uploading profile image...");
    const file = e.target.files[0];
    if (file) {
      console.log("Profile image selected:", file);
      setUploadedImageNameProfile(file.name);
      setHasUploadedProfile(true);
    }
  };

  const handleImageUploadContent = (e) => {
    console.log("Uploading profile image...");
    const file = e.target.files[0];
    if (file) {
      console.log("Card image selected:", file);
      setUploadedImageNameContent(file.name);
      setHasUploadedContent(true);
    }
  };

  useEffect(() => {
    const form = document.getElementById("form-add");
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      const profileImg = document.getElementById("profile-img");
      const cardImg = document.getElementById("upload-card");
      const allFiles = [...profileImg.files, ...cardImg.files];
      uploadFiles(allFiles);
    };

    if (form) {
      form.addEventListener("submit", handleFormSubmit); //remove submit event
    }
    return () => {
      if (form) {
        form.removeEventListener("submit", handleFormSubmit);
      }
    };
  }, []);

  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dn7lgsdd1";
      const PRESET_NAME = "upload-img";
      const url = [];
      const FOLDER_NAME = "SOCIAL";
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData(); //key value
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);

        const response = await axios.post(api, formData, {
          headers: {
            "content-Type": "multipart/form-data",
          },
        });
        console.log("Response from Cloudinary:", response);
        url.push(response.data.secure_url);
        console.log(url);
      }
      return url;
    }
  };

  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    setNameError(value === "");
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
    setDescriptionError(value === "");
  };

  const handleSaveClick = async () => {
    setNameError(name === "");
    setDescriptionError(description === "");

    if (
      !name ||
      !description ||
      !uploadedImageNameProfile ||
      !uploadedImageNameContent
    ) {
      return;
    }

    // Get data from local storage (if available)
    const existingData = JSON.parse(localStorage.getItem("cardData")) || [];

    // Check if existingData is not array, create an empty array
    const dataArray = Array.isArray(existingData) ? existingData : [];

    // Check and wait to upload files to Cloudinary
    const profileImg = document.getElementById("profile-img");
    const contentImg = document.getElementById("upload-card");
    const allFiles = [...profileImg.files, ...contentImg.files];

    try {
      const uploadedUrls = await uploadFiles(allFiles);

      // Save Name and Description to Local Storage
      const newDataItem = {
        name,
        description,
        Profile: uploadedUrls[0],
        img: uploadedUrls[1],
      };

      // Add new item to old data list
      const updatedData = [...dataArray, newDataItem];

      localStorage.setItem("cardData", JSON.stringify(updatedData));
      resetForm();
      console.log("Information has been saved:", newDataItem);
      window.location.reload();
      closeModal();
    } catch (error) {
      console.error("Error while uploading images:", error);
    }
  };

  const resetForm = () => {
    setUploadedImageNameProfile(null);
    setHasUploadedProfile(false);
    setUploadedImageNameContent(null);
    setHasUploadedContent(false);
    setName("");
    setDescription("");
    setNameError(false);
    setDescriptionError(false);
  };

  return (
    <form action="" id="form-add">
      <div className={styles.newCard}>
        <div className={styles.modal}>
          <div className={styles.modalCard}>
            <div className={styles.mainCard}>
              <div className={styles.modalHeader}>Add new card</div>
              <div className={styles.modalBody}>
                <div className={styles.cardText}>
                  <li className={!hasUploadedProfile ? styles.errorText : ""}>
                    Avatar
                  </li>
                  <li className={nameError ? styles.errorText : ""}>Name</li>
                  <li className={descriptionError ? styles.errorText : ""}>
                    Decription
                  </li>
                  <li className={!hasUploadedContent ? styles.errorText : ""}>
                    Image
                  </li>
                </div>
                <div className={styles.cardInput}>
                  <div className={styles.cardAvatar}>
                    <label
                      htmlFor="profile-img"
                      className={`${styles.uploadLabel} ${
                        !hasUploadedProfile ? styles.errorText : ""
                      }`}
                    >
                      {hasUploadedProfile ? (
                        <>
                          <img src="images/icon_arrow.svg" alt="icon_arrow" />
                          <span>{uploadedImageNameProfile}</span>
                        </>
                      ) : (
                        <>
                          <img src="images/icon_arrow.svg" alt="icon_arrow" />
                          <div className={styles.decription}>Upload image</div>
                        </>
                      )}
                    </label>

                    <input
                      type="file"
                      id="profile-img"
                      accept="image/*"
                      className={`${styles.hiddenInput} ${styles.fileNameInput}`}
                      onChange={handleImageUploadProfile}
                    />
                  </div>

                  <div
                    className={`${styles.cardInput} ${
                      nameError ? styles.errorInput : ""
                    }`}
                  >
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>

                  <div
                    className={`${styles.cardInput} ${
                      descriptionError ? styles.errorInput : ""
                    }`}
                  >
                    <textarea
                      value={description}
                      onChange={handleDescriptionChange}
                    ></textarea>
                  </div>

                  <div className={`${styles.cardAvatar} ${styles.cardImg}`}>
                    <label
                      htmlFor="upload-card"
                      className={`${styles.uploadLabel} ${
                        !hasUploadedContent ? styles.errorText : ""
                      }`}
                    >
                      {hasUploadedContent ? (
                        <>
                          <img src="images/icon_arrow.svg" alt="icon_arrow" />
                          <span>{uploadedImageNameContent}</span>
                        </>
                      ) : (
                        <>
                          <img src="images/icon_arrow.svg" alt="icon_arrow" />
                          <div className={styles.Decription}>Upload image</div>
                        </>
                      )}
                    </label>

                    <input
                      type="file"
                      id="upload-card"
                      accept="image/*"
                      className={styles.hiddenInput}
                      onChange={handleImageUploadContent}
                    />
                  </div>

                  <div
                    className={`${styles.cardAvatar} ${styles.cardImg}`}
                  ></div>
                </div>
              </div>
            </div>

            <div className={styles.btn}>
              <div className={styles.saveBtn}>
                <button type="submit" onClick={handleSaveClick}>
                  Save
                </button>
              </div>
              <div className={styles.cancelBtn} onClick={closeModal}>
                Cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Index;
