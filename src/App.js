import "./App.css";
import { ComposePost } from "./components";
import { usePost } from "./hoooks";

function App() {
  const {
    state: { posts },
  } = usePost();

  return (
    <div className="App">
      <ComposePost />
      {posts?.map((post) => {
        return (
          <div key={post.date}>
            <p>{post.text}</p>
            <img src={post.gifUrl} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
