import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({title}) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Functional Arrow Component</h2>
      <Card title="One"/>
      <Card title="Two" />
      <Card title="Three"/>
    </div>
  );
}

export default App;
