import { getConversations } from "../utils/localStorageHelpers";
import { useState } from "react";

export default function HistoryPage() {
  const [filter, setFilter] = useState(null);
  const conversations = getConversations();

  const filtered = filter
    ? conversations.filter((c) => c.rating === filter)
    : conversations;

  return (
    <div>
      <h2>Past Conversations</h2>

      <select onChange={(e) => setFilter(Number(e.target.value))}>
        <option value="">All</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
      </select>

      {filtered.map((conv, i) => (
        <div key={i}>
          <p>Rating: {conv.rating}</p>
          <p>{conv.feedback}</p>
        </div>
      ))}
    </div>
  );
}
