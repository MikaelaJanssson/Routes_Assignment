import "./App.css";
import Home from "./Components/Home";
import PostDetail from "./Components/PostDetail";
import PostList from "./Components/PostList";
import UserList from "./Components/UserList";
import UserDetail from "./Components/UserDetail";
import { Link, Route, Routes } from "react-router-dom";
import { PostContext } from "./contexts/PostContext";
import { UserContext } from "./contexts/UserContext";

function App() {
  const postData = [
    {
      id: 1,
      title: "Post 1",
      content: "This is the content of Post 1",
    },
    {
      id: 2,
      title: "Post 2",
      content: "This is the content of Post 2",
    },
    {
      id: 3,
      title: "Post 3",
      content: "This is the content of Post 3",
    },
  ];

  const userData = [
    {
      id: 1,
      title: "Alice",
      content: "Frontend Developer",
    },
    {
      id: 2,
      title: "Bob",
      content: "Backend Developer",
    },
    {
      id: 3,
      title: "Charlie",
      content: "Fullstack Developer",
    },
  ];

  return (
    <PostContext.Provider value={postData}>
      <UserContext.Provider value={userData}>
        {/* ✅ NAV ligger nu UTANFÖR .App */}
        <nav>
          <Link to="/home">
            <button>Home</button>
          </Link>
          <Link to="/postlist">
            <button>PostList</button>
          </Link>
          <Link to="/userlist">
            <button>UserList</button>
          </Link>
        </nav>

        <div className="App">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/postlist" element={<PostList />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/postDetail/:postId" element={<PostDetail />} />
            <Route path="/userDetail/:userId" element={<UserDetail />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
