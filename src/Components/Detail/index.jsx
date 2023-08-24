import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Detail = () => {
  const [numHearts, setNumHearts] = useState(0);
  const [numComments, setNumComments] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  const increaseHearts = () => {
    setNumHearts(numHearts + 1);

    localStorage.setItem("numHearts", numHearts + 1);
  };
  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      const currentDateTime = new Date();
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      const formattedDateTime = currentDateTime.toLocaleString(
        undefined,
        options
      );

      const updatedComments = [
        ...comments,
        { text: newComment, postDateTime: formattedDateTime },
      ];

      setComments(updatedComments);
      setNumComments(updatedComments.length); // Save the date and time of the post

      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setNewComment("");

      setCommentError(true);

    } else {
      setCommentError(false);

      const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
      const updatedComments = [...storedComments, newComment];
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setNewComment("");
      setComments(updatedComments);
    }
  };

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      const parsedComments = JSON.parse(storedComments);
      setComments(parsedComments);
      setNumComments(parsedComments.length);
    }
  
    const storedNumHearts = localStorage.getItem("numHearts");
    if (storedNumHearts) {
      setNumHearts(Number(storedNumHearts));
    }
  }, []);

  return (
    <div className={styles.cardDetail}>
      <div className={styles.title}>SOCIAL CARD DETAIL</div>
      <div className={styles.cardItem}>
        <div className={styles.item}>
          <div className={styles.avata}>
            <div className={styles.avt}>
              <img src="./images/avt_varen.svg" alt="avt" />
            </div>
            <div className={styles.nameDate}>
              <div className={styles.name}>Binance</div>
              <div className={styles.date}>22/04/2021 (day create)</div>
            </div>
          </div>
        </div>
        <div className={styles.subTitle}>{comments}</div>

        <div className={styles.images}>
          <img src="./images/img_house.png" alt="image" />
        </div>

        <div className={styles.icon}>
          <div className={styles.iconHeart} onClick={increaseHearts}>
            <div>
              <img
                className={styles.heart}
                src="./images/icon_heart.svg"
                alt="icon_heart"
              />
            </div>
            <div>{numHearts}</div>
          </div>

          <div className={styles.iconComment}>
            <div>
              <img
                className={styles.com}
                src="./images/icon_comment.svg"
                alt="icon_comment"
              />
            </div>
            <div>{numComments}</div>
          </div>
        </div>

        <div className={styles.listComment}>
          {comments.map((comment, index) => (
            <div key={index} className={styles.commentDate}>
              <div className={styles.date}>{comment.postDateTime}</div>{" "}
              <div className={styles.subTitle}>{comment.text}</div>
            </div>
          ))}
        </div>

      </div>

      <div className={styles.comment}>
        <div className={styles.postTile}>Post new comment</div>
        <div className={styles.newComment}>
          <div className={styles.addComment}>
            <textarea
              className={commentError ? styles.errorTextarea : ""}
              type="text"
              placeholder="Add comment"
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
          </div>
          <div className={styles.btnPost} onClick={handlePostComment}>
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
