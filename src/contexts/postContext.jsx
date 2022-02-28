import { createContext, useReducer } from "react";
import { postsReducer } from "../reducers";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, {
    posts: [],
  });

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
