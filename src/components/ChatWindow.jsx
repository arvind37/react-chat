import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import replies from "../data/replies.json";
import ChatMessage from "./ChatMessage";

export default function ChatWindow() {
  const { messages, setMessages } = useContext(ChatContext);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userMsg = input.toLowerCase();
    setMessages((prev) => [...prev, { text: input, bot: false }]);

    const reply =
      replies[userMsg] ||
      "Sorry, Did not understand your query!";

    setMessages((prev) => [
      ...prev,
      { text: input, bot: false },
      { text: reply, bot: true }
    ]);

    setInput("");
  };

  return (
    <div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.text}
            isBot={msg.bot}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Please tell me about your query!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
    </div>
  );
}
