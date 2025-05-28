import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export default function PostDetail() {
  const posts = useContext(PostContext);
  const { postId } = useParams();
  const post = posts.find((p) => p.id === parseInt(postId));

  return (
    <div className="detail-page">
      <h1>Post Detail</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
