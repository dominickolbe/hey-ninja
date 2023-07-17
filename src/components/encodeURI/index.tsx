import { useState } from "react";

export const EncodeURI = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const onClickConvert = () => {
    setOutputValue(encodeURIComponent(inputValue));
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span>{`<->`}</span>
      <input
        value={outputValue}
        onChange={(e) => setOutputValue(e.target.value)}
      />
      <button onClick={() => onClickConvert()}>Convert</button>
    </>
  );
};
