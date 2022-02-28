export const postsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    default:
      break;
  }
  return state;
};
