import { useState } from "react";
import replies from "../data/replies.json";
import { saveConversations, getConversations } from "../utils/localStorageHelpers";

export default function ChatWindow() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let reply =
      replies[message] ||
      "Sorry, Did not understand your query!";

    const updatedChat = [
      ...chat,
      { user: message, bot: reply }
    ];

    setChat(updatedChat);

    // Save to localStorage
    const saved = getConversations();
    saveConversations([...saved, ...updatedChat]);

    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Please tell me about your query!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">
          Ask
        </button>
      </form>

      {chat.map((c, i) => (
        <div key={i}>
          <p>{c.user}</p>
          <p>{c.bot}</p>
        </div>
      ))}
    </div>
  );
}
