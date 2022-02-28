import { useContext } from "react";
import { PostContext } from "../contexts";

export const usePost = () => {
  const { state, dispatch: postDispatch } = useContext(PostContext);

  return {
    state,
    postDispatch,
  };
};
