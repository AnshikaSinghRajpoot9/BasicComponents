import { useState } from "react";

const HoverButton = () => {
  const [text, setText] = useState("India");

  const handleMouseEnter = () => {
    setText("Malayalam");
  };

  const handleMouseLeave = () => {
    setText("India");
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 transition duration-300"
    >
      {text}
    </button>
  );
};

export default HoverButton;