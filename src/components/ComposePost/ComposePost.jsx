import React, { useState } from "react";
import { usePost } from "../../hoooks";
import { GifContainer } from "./GifContainer";

export default function ComposePost() {
  const [text, setText] = useState("");
  const [gifUrl, setGifUrl] = useState(null);
  const [showGif, setShowGif] = useState(false);

  const { postDispatch } = usePost();

  function clickHandler() {
    if (text.length || gifUrl) {
      postDispatch({
        type: "ADD_NEW_POST",
        payload: { date: Date.now(), text, gifUrl },
      });
    }
    setText("");
    setGifUrl(null);
  }

  return (
    <div>
      <div>
        <div>compose</div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <img src={gifUrl} alt="" />
      </div>
      <div>
        <button onClick={() => setShowGif((showGif) => !showGif)}>gif</button>
        <button onClick={() => clickHandler()}>post</button>
      </div>

      {showGif && <GifContainer setGifUrl={setGifUrl} />}
    </div>
  );
}

// import React from "react";
// import { useState } from "react";
// import styles from "./Compose.module.css";
// import Img from "./profile.png";
// import { AiFillCloseSquare } from "react-icons/ai";
// import { usePost } from "../../reducer/postsReducer";
// import GifContainer from "./GifContainer";

// function Compose() {
//   const [text, setText] = useState("");
//   const [gifUrl, setGifUrl] = useState(null);
//   const [viewGif, setViewGif] = useState(false);
//   const { dispatch } = usePost();

//   async function submitHandler(e) {
//     e.preventDefault();
//     if (text.length || gifUrl) {
//       dispatch({
//         type: "ADD_NEW_POST",
//         payload: { date: Date.now(), text, gifUrl },
//       });
//     }
//     setText("");
//     setGifUrl(null);
//     setViewGif(false);
//   }

//   return (
//     <div className={styles.share}>
//       <div className={styles.shareWrapper}>
//         <div className={styles.shareTop}>
//           <img className={styles.shareProfileImg} src={Img} alt="profile pic" />
//           <textarea
//             name="text"
//             placeholder="Write something here..."
//             className={styles.shareInput}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//         </div>
//         <hr className={styles.shareHr} />
//         {gifUrl && (
//           <div className={styles.shareImgContainer}>
//             <img className={styles.shareImg} src={gifUrl} alt="" />
//             <AiFillCloseSquare
//               className={styles.shareCancelImg}
//               onClick={() => setGifUrl(null)}
//               size={24}
//               color="#fff"
//             />
//           </div>
//         )}
//         <form className={styles.shareBottom} onSubmit={submitHandler}>
//           <div
//             className={styles.shareOptions}
//             onClick={() => setViewGif((prev) => !prev)}
//           >
//             <span className={styles.shareOptionText}>GIF</span>
//           </div>
//           {viewGif && <GifContainer setGifUrl={setGifUrl} />}
//           <button className={styles.shareButton} type="submit">
//             Post
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Compose;
