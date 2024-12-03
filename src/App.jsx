import { useState } from "react";
import CreatePostForm from "./components/Forms/CreatePost/CreatePostForm";
import Post from "./components/Post/Post";

function App() {
  const [posts, setPosts] = useState([]);

  console.log(posts);

  const handleCreatePost = (e, post) => {
    e.preventDefault();

    setPosts((posts) => [...posts, post]);
  };

  const handleDeletePost = (postId) =>
    setPosts(posts.filter((post) => post.id !== postId));

  return (
    <>
      <header>
        <h1>Il mio blog</h1>
      </header>
      <main>
        <div className="container">
          <div className="flex">
            <section className="create-post">
              <CreatePostForm createPost={handleCreatePost} />
            </section>
            <section className="my-posts">
              <h2>I miei post</h2>
              {posts.length ? (
                <ul className="flex">
                  {posts.map((post) => (
                    <Post
                      key={post.id}
                      {...post}
                      deletePost={handleDeletePost}
                    />
                  ))}
                </ul>
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
