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
