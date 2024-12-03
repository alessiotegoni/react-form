import { useId, useState } from "react";
import CreatePostForm from "./components/Forms/CreatePost/CreatePostForm";
import Post from "./components/Post/Post";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <header>
        <h1>Il mio blog</h1>
      </header>
      <main>
        <div className="container">
          <div className="flex">
            <section className="create-post">
              <CreatePostForm />
            </section>
            <section className="my-post">
              <h2>I miei post</h2>
              {posts.length ? (
                posts.map((post) => <Post key={post.id} {...post} />)
              ) : (
                <p style={{ marginTop: ".5rem" }}>Non hai postato ancora</p>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
