import React from "react";
import styles from "./Post.module.css";

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postHeader}>
          <div className={styles.postAvatar}>
            <img className={styles.postProfileImg} src="profile.png" alt="" />
            <span className={styles.postUsername}>Rakesh</span>
          </div>
        </div>
        <div className={styles.postData}>
          <p className={styles.postText}>{post.text}</p>
          <img className={styles.postImg} src={post.gifUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Post;
