import "./App.css";
import { ComposePost, Post } from "./components";
import { usePost } from "./hoooks";

function App() {
  const {
    state: { posts },
  } = usePost();

  return (
    <div className="App">
      <ComposePost />
      {posts?.map((post) => {
        return <Post key={post.date} post={post} />;
      })}
    </div>
  );
}

export default App;
