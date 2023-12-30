import React from "react";

const Error = ({ message }) => {
  return (
    <span className="text-red-600 px-2 py-2">
      {message || "This field is required"}
    </span>
  );
};

export default Error;
