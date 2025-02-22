import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ title }) => {
  return (
    <div className="card"
    >
      <h2>{title}</h2>
      <button onClick={()=> setHasLiked(true)}>
        Like
      </button>
    </div>
  );
};

function App() {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card-container">
      <h2>Functional Arrow Component</h2>
      <Card title="One" />
      <Card title="Two" />
      <Card title="Three" />
    </div>
  );
}

export default App;
