import React, { useState } from "react";
import styles from "./styles.module.css";

const Detail = () => {
  const [numHearts, setNumHearts] = useState(0); // Initial value is 2
  const [numComments, setNumComments] = useState(0); // Number of original comments
  const [comments, setComments] = useState([]); // List comment
  const [newComment, setNewComment] = useState("");
  const [postDateTime, setPostDateTime] = useState("");

  const increaseHearts = () => {
    setNumHearts(numHearts + 1);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
    }
  };
  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      const currentDateTime = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric" };
      const formattedDateTime = currentDateTime.toLocaleString(undefined, options);
      
      setComments([...comments, newComment]);
      setNumComments((prevNumComments) => prevNumComments + 1);
      setPostDateTime(formattedDateTime); // Lưu ngày và giờ post
      setNewComment(""); // Đặt lại giá trị của newComment
    }
  };
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
          <div className={styles.date}>{postDateTime}</div> {/* Show current date and time */}
          <div className={styles.subTitle}>{comment}</div>
        </div>
      ))}
        </div>
      </div>
      <div className={styles.comment}>
        <div className={styles.postTile}>Post new comment</div>
        <div className={styles.newComment}>
          <div className={styles.addComment}>
            <textarea
              type="text"
              placeholder="Add comment"
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div
            className={styles.btnPost}
            onClick={handlePostComment}
          >
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
