import { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [rating, setRating] = useState(null);

  return (
    <ChatContext.Provider
      value={{ messages, setMessages, rating, setRating }}
    >
      {children}
    </ChatContext.Provider>
  );
};
