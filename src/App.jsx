import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "pink" }}>Hello</h1>
      <ColorfulMessage color="pink" message="Helo" />
      <ColorfulMessage color="blue" message="World!" />
      <button onClick={onClickButton}>button</button>
    </>
  );
};

export default App;
