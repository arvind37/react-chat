import ChatWindow from "../components/ChatWindow";
import { Link } from "react-router-dom";

export default function ChatPage() {
  return (
    <div>
      <ChatWindow />

      {/* Must be LINK not button */}
      <Link to="/" >
        New Query?
      </Link>
    </div>
  );
}
