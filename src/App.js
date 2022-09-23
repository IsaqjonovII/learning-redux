import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={theme === "dark" ? "app app__dark" : "app app__light"}>
      <Profile />
      <Login />
    </div>
  );
};

export default App;
