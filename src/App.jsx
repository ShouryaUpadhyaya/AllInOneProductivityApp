import { useState } from "react";
import Layout from "./components/Layout";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <h1 className="bg-black text-white w-screen p-0 m-0">System</h1>
        <Layout />
      </Provider>
    </>
  );
}

export default App;
