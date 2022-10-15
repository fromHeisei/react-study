import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "green" }}>Hello</h1>
      <p style={contentStyle}>My mone </p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
