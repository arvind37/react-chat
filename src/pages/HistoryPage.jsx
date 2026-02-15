import { getConversations } from "../utils/localStorageHelpers";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HistoryPage() {
  const [filter, setFilter] = useState("");
  const conversations = getConversations();

  const filtered = filter
    ? conversations.filter((c) => String(c.rating) === filter)
    : conversations;

  return (
    <div>
      <Link to="/">New Query?</Link>

      <h2>Past Conversations</h2>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
        <option value="3">3 Stars</option>
        <option value="2">2 Stars</option>
        <option value="1">1 Star</option>
      </select>

      {filtered.map((conv, i) => (
        <div key={i}>
          <p>{conv.question}</p>
          <p>{conv.answer}</p>
          <p>Rating: {conv.rating}</p>
          {conv.feedback && <p>{conv.feedback}</p>}
        </div>
      ))}
    </div>
  );
}
