import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDayReview } from "../redux/dayReviewSlice";
import { format } from "date-fns";

const DayReview = () => {
  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.dayReviews);
  const state = useSelector((state) => state);
  console.log(state);
  const handleSubmit = () => {
    if (review.trim()) {
      const today = format(new Date(), "dd-MM-yyyy");
      dispatch(addDayReview({ date: today, review }));
      setReview("");
    }
  };

  return (
    <div className="p-4 bg-gray-100 shadow rounded-lg  mx-auto">
      <h2 className="text-2xl font-bold mb-4">Day Review</h2>

      <textarea
        className="w-full p-2 border rounded-lg mb-4 text-gray-700"
        placeholder="Write about your day..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Submit Review
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">Previous Reviews</h3>
        <ul>
          {reviews.map((r, index) => (
            <li key={index} className="mb-2 p-2 border-b">
              <p className="font-semibold">{r.date}</p>
              <p>{r.review}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DayReview;
