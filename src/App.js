import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return <div className="app">
    <Profile />
    <Login />
  </div>;
}

export default App;
