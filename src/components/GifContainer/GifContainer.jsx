import axios from "axios";
import React, { useEffect, useState } from "react";
import Styles from "./GifContainer.module.css";

const GifContainer = ({ setGifUrl }) => {
  const [searchText, setSearchText] = useState("");
  const [gifData, setGifData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(gifData);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const {
          data: { data },
        } = await axios("https://api.giphy.com/v1/gifs/search", {
          params: {
            api_key: process.env.REACT_APP_GIPHY_API_KEY,
            q: searchText,
            limit: 25,
          },
        });

        setGifData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    })();
  }, [searchText]);

  return (
    <div className={Styles.container}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e?.target?.value)}
        placeholder="search here.."
      />
      <div className={Styles.gifs}>
        {!isLoading &&
          gifData?.map((gif) => {
            return (
              <img
                key={gif.id}
                src={gif.images.fixed_height_small.url}
                onClick={(e) => setGifUrl(e.target.src)}
                alt=""
                className={Styles.gif}
              />
            );
          })}
      </div>
    </div>
  );
};

export default GifContainer;
