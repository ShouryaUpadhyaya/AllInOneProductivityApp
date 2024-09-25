import { useState } from "react";
import Layout from "./components/Layout";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-black text-white w-screen p-0 m-0">System</h1>
      <Layout />
    </>
  );
}

export default App;
