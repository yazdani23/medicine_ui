import React from "react";

const Message = ({ type }) => {
  return (
    <div
      className={`w-50 p-4 rounded shadow ${
        type == "response" ? "bg-primary ms-auto mt-5" : "bg-white"
      }`}
    >
      <h5></h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae obcaecati
        voluptate eius voluptatem culpa nemo omnis mollitia! Neque
      </p>
    </div>
  );
};

export default Message;
