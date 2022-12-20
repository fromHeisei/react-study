import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);

  const contentladyStyle = {
    color: props.color,
    fontSize: "18px"
  };

  return <p style={contentladyStyle}>{props.message}</p>;
};

export default ColorfulMessage;
