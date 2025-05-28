import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Card from "./Card";

export default function UserList() {
  const users = useContext(UserContext);

  return (
    <>
      <h1>Our Team</h1>
      <div className="user-grid">
        {users.map((user) => (
          <Card
            key={user.id}
            title={user.title}
            subtitle={user.content}
            linkTo={`/userDetail/${user.id}`}
            image={`https://api.dicebear.com/7.x/personas/svg?seed=${user.title}`}
          />
        ))}
      </div>
    </>
  );
}
