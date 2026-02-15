import { useState } from "react";

export default function FeedbackModal({ type, onSubmit }) {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="modal">
      <h3>Feedback</h3>

      {type === "like" && <p>Please rate this response</p>}
      {type === "dislike" && (
        <textarea
          placeholder="Tell us what went wrong..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      )}

      <button type="button" onClick={() => onSubmit(feedback)}>
        Submit
      </button>
    </div>
  );
}
