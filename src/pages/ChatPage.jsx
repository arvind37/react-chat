import ChatWindow from "../components/ChatWindow";
import ThemeToggle from "../components/ThemeToggle";
import { useNavigate } from "react-router-dom";

export default function ChatPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Customer Support AI</h1>
      <ThemeToggle />
      <button onClick={() => navigate("/history")}>
        Past Conversations
      </button>
      <ChatWindow />
      <button type="button" onClick={() => window.location.reload()}>
        New Query?
      </button>
    </div>
  );
}
