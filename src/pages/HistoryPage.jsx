import { getConversations } from "../utils/localStorageHelpers";

export default function HistoryPage() {
  const conversations = getConversations();

  return (
    <div>
      <h2>Past Conversations</h2>

      {conversations.map((conv, i) => (
        <div key={i}>
          <p>{conv.user}</p>
          <p>{conv.bot}</p>
        </div>
      ))}
    </div>
  );
}
