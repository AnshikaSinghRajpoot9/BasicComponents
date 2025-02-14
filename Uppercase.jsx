import  { useState } from "react";

const UppercaseCounter = () => {
  const [text, setText] = useState("");
  const [uppercaseCount, setUppercaseCount] = useState(0);

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    const count = (inputText.match(/[A-Z]/g) || []).length; // Count uppercase letters
    setUppercaseCount(count);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type something here..."
        rows="6"
        cols="40"
        className="border rounded-md p-2 mb-4 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <p className="text-lg font-medium text-gray-800">
        Uppercase Letters Count: {uppercaseCount}
      </p>
    </div>
  );
};

export default UppercaseCounter;