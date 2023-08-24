import styles from "./style.module.css";
import React, { useState, useEffect } from "react";
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
      }
      return url;
    }
  };

  const [uploadedAvataName, setUploadedAvataName] = useState(null);
  const [uploadedImageName, setUploadedImageName] = useState(null);
  const [uploadedName, setUploadedName] = useState(null);
  const [uploadedDesciptionName, setUploadedDesciptionName] = useState(null);

  const [imagePreview, setImagePreview] = useState(null);

  const [hasUploadedAvata, setHasUploadedAvata] = useState(false);
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [hasUploadedName, setHasUploadedName] = useState(true);
  const [hasUploadedDesciption, setHasUploadedDesciption] = useState(true);

  const handleAvataUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedAvataName(file.name);
      setHasUploadedAvata(true);
      setImagePreview(e.target.result);
    } else {
      setHasUploadedAvata(false);
    }
    const uploadedAvata = e.target.files[0];
    setAvatar(uploadedAvata);

  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setHasUploadedName(newName.trim() !== "");
  };

  const handleDesciptionName = (e) => {
    const newName = e.target.value;
    setHasUploadedDesciption(newName.trim() !== "");
    setName(newName);

    const newDescription = e.target.value;
    setDescription(newDescription);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImageName(file.name);
      setHasUploadedImage(true);
      setImagePreview(e.target.result);
    } else {
      setHasUploadedImage(false);
    }
    const uploadedImages = e.target.files;
    setImages(uploadedImages);
  };

  //Add fields
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleSave = () => {
    // Tạo một object để lưu dữ liệu
    const cardData = {
      avatar,
      name,
      description,
      images,
    };
    console.log("Card data to save:", cardData);
  };
  const [dataList, setDataList] = useState([]);

  return (
    <form action="" id="form-add">
      <div className={styles.modal}>
        <div className={styles.title}>Add new card</div>
        <div className={styles.cardAdd}>
          <div className={styles.bodyCard}>
            <div className={styles.avata}>
              <div
                className={`${styles.avt} ${
                  !hasUploadedAvata ? styles.errorText : ""
                }`}
              >
                Avatar*
              </div>
              <div className={styles.uploading}>
                <label
                  htmlFor="profile-img"
                  className={`${styles.uploadLabel} ${
                    !hasUploadedAvata ? styles.errorText : ""
                  }`}
                >
                  {hasUploadedAvata ? (
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
              <div
                className={`${styles.avt} ${
                  !hasUploadedName ? styles.errorName : ""
                }`}
              >
                Name*
              </div>
              <div className={styles.uploading}>
                <input type="text" onChange={handleNameChange} required />
              </div>
            </div>

            <div className={styles.avataTextarea}>
              <div
                className={`${styles.avt} ${
                  !hasUploadedDesciption ? styles.errorName : ""
                }`}
              >
                Description*
              </div>
              <div className={styles.uploadingTextarea}>
                <textarea
                  type="text"
                  onChange={handleDesciptionName}
                  required
                />
              </div>
            </div>

            <div className={styles.avata}>
              <div
                className={`${styles.avt} ${
                  !hasUploadedImage ? styles.errorText : ""
                }`}
              >
                Image*
              </div>
              <div className={styles.uploading}>
                <label
                  htmlFor="profile-img"
                  className={`${styles.uploadLabel} ${
                    !hasUploadedImage ? styles.errorText : ""
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
            <button type="submit" className={styles.btnSave} onClick={handleSave}>
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
