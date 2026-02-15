import ChatWindow from "../components/ChatWindow";
import ThemeToggle from "../components/ThemeToggle";
import { Link } from "react-router-dom";

export default function ChatPage() {
  return (
    <div>
      <ThemeToggle />

      <Link to="/history">Past Conversations</Link>

      <ChatWindow />

      <Link to="/">New Query?</Link>
    </div>
  );
}
