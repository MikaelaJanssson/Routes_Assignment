import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import Card from "./Card";

export default function PostList() {
  const posts = useContext(PostContext);

  return (
    <>
      <h1>Articles</h1>
      <div className="user-grid">
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            subtitle={post.content.slice(0, 80) + "..."}
            linkTo={`/postDetail/${post.id}`}
            image={`https://api.dicebear.com/7.x/shapes/svg?seed=post${post.id}`}
          />
        ))}
      </div>
    </>
  );
}
