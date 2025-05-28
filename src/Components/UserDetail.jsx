import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserDetail() {
  const { userId } = useParams();
  const users = useContext(UserContext);
  const user = users.find((u) => u.id === parseInt(userId));

  return (
    <div className="detail-page">
      <img
        src={`https://api.dicebear.com/7.x/personas/svg?seed=${user.title}`}
        alt={user.title}
        className="profile-img"
      />
      <h1>{user.title}</h1>
      <p>{user.content}</p>
    </div>
  );
}
