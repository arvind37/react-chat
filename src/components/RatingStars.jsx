export default function RatingStars({ onRate }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ cursor: "pointer", fontSize: "20px" }}
          onClick={() => onRate(star)}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}
