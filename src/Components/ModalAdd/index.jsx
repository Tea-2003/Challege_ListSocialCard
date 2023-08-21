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

  const [uploadedImageName, setUploadedImageName] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [hasUploaded, setHasUploaded] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImageName(file.name);
      setHasUploaded(true);
      setImagePreview(e.target.result);
    }
  };

  return (
    <form action="" id="form-add">
      <div className={styles.modal}>
        <div className={styles.title}>Add new card</div>
        <div className={styles.cardAdd}>
          <div className={styles.bodyCard}>
            <div className={styles.avata}>
              <div className={styles.avt}>Avatar*</div>
              <div className={styles.uploading}>
                <label htmlFor="profile-img" className={styles.uploadLabel}>
                  {hasUploaded ? (
                    <>
                      <span>{uploadedImageName}</span>
                    </>
                  ) : (
                    <>
                      <img src="./images/icon_arrow.svg" alt="icon_arrow" />
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
            <div className={styles.avata}>
              <div className={styles.avt}>Name*</div>
              <div className={styles.uploading}>
                <input type="text"></input>
              </div>
            </div>
            <div className={styles.avataTextarea}>
              <div className={styles.avt}>Description*</div>
              <div className={styles.uploadingTextarea}>
                <textarea type="text" defaultValue={""} />
              </div>
            </div>
            <div className={styles.avata}>
              <div className={styles.avt}>Image*</div>
              <div className={styles.uploading}>
                <label htmlFor="profile-img" className={styles.uploadLabel}>
                  {uploadedImageName ? (
                    <span>{uploadedImageName}</span>
                  ) : (
                    <>
                      <img src="./images/icon_arrow.svg" alt="icon_arrow" />
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
            <button type="submit" className={styles.btnSave}>
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
