import axios from "axios";
import React, { useEffect, useState } from "react";

export const GifContainer = ({ setGifUrl }) => {
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
        } = await axios("http://api.giphy.com/v1/gifs/search", {
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
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e?.target?.value)}
      />
      <div>
        {!isLoading &&
          gifData?.map((gif) => {
            return (
              <img
                key={gif.id}
                src={gif.images.fixed_height_small.url}
                onClick={(e) => setGifUrl(e.target.src)}
                alt=""
              />
            );
          })}
      </div>
    </div>
  );
};
