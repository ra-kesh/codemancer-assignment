import React, { useState } from "react";
import { usePost } from "../../hoooks";
import GifContainer from "../GifContainer";
import Styles from "./ComposePost.module.css";

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
    <div className={Styles.container}>
      <div>
        <textarea
          className={Styles.composePost}
          placeholder="write here.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <img src={gifUrl} alt="" />
      </div>

      <div className={Styles.button_container}>
        <span onClick={() => setShowGif((showGif) => !showGif)}>add gifs</span>
        <button className={Styles.button} onClick={() => clickHandler()}>
          post
        </button>
      </div>

      {showGif && (
        <div className={Styles.ModalWrapper}>
          <div
            className={Styles.ModalOverlay}
            onClick={() => setShowGif(false)}
          ></div>
          <GifContainer setGifUrl={setGifUrl} />
        </div>
      )}
    </div>
  );
}
