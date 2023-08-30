import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const Index = ({ closeModal, editedData }) => {
  const [name, setName] = useState(editedData ? editedData.name : "");
  const [description, setDescription] = useState(
    editedData ? editedData.description : ""
  );
  const [uploadedImageNameProfile, setUploadedImageNameProfile] = useState(
    editedData ? editedData.Profile : null
  );
  const [hasUploadedProfile, setHasUploadedProfile] = useState(
    Boolean(editedData && editedData.Profile)
  );
  const [uploadedImageNameContent, setUploadedImageNameContent] = useState(
    editedData ? editedData.img : null
  );
  const [hasUploadedContent, setHasUploadedContent] = useState(
    Boolean(editedData && editedData.img)
  );

  useEffect(() => {
    if (editedData) {
      setName(editedData.name);
      setDescription(editedData.description);
      setUploadedImageNameProfile(editedData.Profile);
      setHasUploadedProfile(Boolean(editedData.Profile));
      setUploadedImageNameContent(editedData.img);
      setHasUploadedContent(Boolean(editedData.img));
    }
  }, [editedData]);

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
    console.log("Uploading content image...");
    const file = e.target.files[0];
    if (file) {
      console.log("Content image selected:", file);
      setUploadedImageNameContent(file.name);
      setHasUploadedContent(true);
    }
  };

  useEffect(() => {
    const form = document.getElementById("form-add");
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      const profileImg = document.getElementById("profile-img");
      const contentImg = document.getElementById("upload-img-content");
      const allFiles = [...profileImg.files, ...contentImg.files];
      uploadFiles(allFiles, profileImg, contentImg);
    };

    if (form) {
      form.addEventListener("submit", handleFormSubmit);
    }
    return () => {
      if (form) {
        form.removeEventListener("submit", handleFormSubmit);
      }
    };
  }, []);
  // Empty dependency array means this effect runs once after initial render

  const uploadFiles = async (files, profileImg, contentImg) => {
    if (files) {
      const CLOUD_NAME = "dsp0tuvsv";
      const PRESET_NAME = "upload-img";
      const uploadedUrls = [];
      const FOLDER_NAME = "SOCIAL";
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData();
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      const fileIsProfileImage = Boolean(profileImg.files.length > 0);
      const fileIsContentImage = Boolean(contentImg.files.length > 0);

      for (const file of files) {
        formData.append("file", file);

        const response = await axios.post(api, formData, {
          headers: {
            "content-Type": "multipart/form-data",
          },
        });
        console.log("Response from Cloudinary:", response);
        if (fileIsProfileImage) {
          uploadedUrls[0] = response.data.secure_url;
        }

        if (fileIsContentImage) {
          uploadedUrls[1] = response.data.secure_url;
        }
      }
      return uploadedUrls;
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

    if (!name || !description) {
      return;
    }
    // Get data from local storage (if available)
    const existingData = JSON.parse(localStorage.getItem("cardData")) || [];
    // Check if existingData is not array, create an empty array
    const dataArray = Array.isArray(existingData) ? existingData : [];
    // Check and wait to upload files to Cloudinary
    const profileImg = document.getElementById("upload-img-profile");
    const contentImg = document.getElementById("upload-img-content");
    const allFiles = [...profileImg.files, ...contentImg.files];
    try {
      const uploadedUrls = await uploadFiles(allFiles, profileImg, contentImg);
      // Check if new profile image is uploaded

      const newProfileImageUrl = hasUploadedProfile
        ? uploadedUrls[0]
        : editedData.Profile;
      const newContentImageUrl = hasUploadedContent
        ? uploadedUrls[1]
        : editedData.img;

      if (hasUploadedProfile) {
        uploadedUrls.push(newProfileImageUrl);
      } else {
        uploadedUrls.push(editedData.Profile);
      }

      if (hasUploadedContent) {
        uploadedUrls.push(newContentImageUrl);
      } else {
        uploadedUrls.push(editedData.img);
      }
      // Save Name and Description to Local Storage
      const newDataItem = {
        name,
        description,
        Profile: newProfileImageUrl ? uploadedUrls[0] : editedData.Profile,
        img: newContentImageUrl ? uploadedUrls[1] : editedData.img,
      };
      const updatedData = [...dataArray];
      if (editedData !== null) {
        const editedIndex = updatedData.findIndex(
          (item) => item.name === editedData.name
        );
        if (editedIndex !== -1) {
          updatedData[editedIndex] = newDataItem;
        }
      } else {
        updatedData.push(newDataItem);
      }
      localStorage.setItem("cardData", JSON.stringify(updatedData));
      resetForm();
      console.log("Information has been saved:", newDataItem);
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
              <div className={styles.modalHeader}>Update card</div>
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
                      htmlFor="upload-img-profile"
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
                      id="upload-img-profile"
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

                  <div
                    className={`${styles.cardAvatar} ${styles.cardImg}`}
                  >
                    <label
                      htmlFor="upload-img-content"
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
                          <div className={styles.decription}>Upload image</div>
                        </>
                      )}
                    </label>

                    <input
                      type="file"
                      id="upload-img-content"
                      accept="image/*"
                      className={styles.hiddenInput}
                      onChange={handleImageUploadContent}
                    />
                  </div>

                  <div
                    className={`${styles.contentAvatar} ${styles.contentImg}`}
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
