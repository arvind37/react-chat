import { useState } from "react";
import FeedbackModal from "./FeedbackModal";
import RatingStars from "./RatingStars";

export default function ChatMessage({ message, isBot }) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState(null);

  const handleThumb = (type) => {
    setFeedbackType(type);
    setShowFeedback(true);
  };

  return (
    <div className={isBot ? "bot" : "user"}>
      <p>{message}</p>

      {isBot && (
        <div className="hover-buttons">
          <button onClick={() => handleThumb("like")}>👍</button>
          <button onClick={() => handleThumb("dislike")}>👎</button>
        </div>
      )}

      {showFeedback && (
        <>
          {feedbackType === "like" && (
            <RatingStars onRate={(r) => console.log("Rated:", r)} />
          )}

          <FeedbackModal
            type={feedbackType}
            onSubmit={(data) => {
              console.log("Feedback:", data);
              setShowFeedback(false);
            }}
          />
        </>
      )}
    </div>
  );
}
