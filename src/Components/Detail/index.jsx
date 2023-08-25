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
      setNewComment();

      setCommentError(true);
    } else {
      setCommentError(false);

      const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
      const updatedComments = [...storedComments, newComment];
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setNewComment();
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
  useEffect(() => {
    // Lưu dữ liệu vào LocalStorage khi component unmount
    localStorage.setItem("comments", JSON.stringify(comments));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

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
        <div className={styles.subTitle}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more- or-less normal distribution
          of letters, as opposed to using 'Content here, content here', making
          it look like readable English. Many desktop publishing packages and
          web page editors now use Lorem Ipsum as their default model text, and
          a search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>

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
              <div className={styles.subTitle}>{comment.newComment}</div>
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
              value={newComment}
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
