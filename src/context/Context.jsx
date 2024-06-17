import { createContext, useState } from "react";
import runChat from "../config/GeminiAPI";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData(""); // reset previous result data
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);

    const response = await runChat(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    prevPrompts,
    setPrevPrompts,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    setShowResult,
    loading,
    resultData,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
