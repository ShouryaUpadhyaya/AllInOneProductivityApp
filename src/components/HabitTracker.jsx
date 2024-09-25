import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabit, removeHabit, completeHabit } from "../redux/habitsSlice";
import { increaseHealth } from "../redux/userSlice";

const HabitTracker = () => {
  const dispatch = useDispatch();
  const habitData = useSelector((state) => state.habits.habitData);
  const [habitName, setHabitName] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // Default to today

  const habitsForSelectedDate = habitData[selectedDate] || [];

  const handleAddHabit = () => {
    if (habitName) {
      dispatch(
        addHabit({
          date: selectedDate,
          habit: {
            id: Date.now(),
            name: habitName,
            difficulty,
            completed: false,
          },
        })
      );
      setHabitName("");
    }
  };

  const handleCompleteHabit = (habitId, habitDifficulty) => {
    dispatch(completeHabit({ date: selectedDate, habitId }));

    const healthIncrease =
      habitDifficulty === "easy" ? 5 : habitDifficulty === "medium" ? 10 : 15;
    dispatch(increaseHealth(healthIncrease));
  };

  const handleRemoveHabit = (habitId) => {
    dispatch(removeHabit({ date: selectedDate, habitId }));
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Habit Tracker</h2>

      {/* Date Selector */}
      <div className="mb-4">
        <label className="mr-4">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>

      {/* Add Habit Form */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="New Habit"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          className="mr-4 p-2 border rounded-md w-full"
        />
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="mr-4 p-2 border rounded-md"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button
          onClick={handleAddHabit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Habit
        </button>
      </div>

      {/* Habit List for Selected Date */}
      <div className="grid grid-cols-1 gap-4">
        {habitsForSelectedDate.length === 0 ? (
          <p>No habits for this day</p>
        ) : (
          habitsForSelectedDate.map((habit) => (
            <div
              key={habit.id}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold">{habit.name}</p>
                <p className="text-sm text-gray-500">
                  Difficulty: {habit.difficulty}
                </p>
              </div>
              <div>
                <button
                  onClick={() =>
                    handleCompleteHabit(habit.id, habit.difficulty)
                  }
                  disabled={habit.completed}
                  className={`mr-4 ${
                    habit.completed ? "bg-green-500" : "bg-yellow-500"
                  } text-white px-4 py-2 rounded-md`}
                >
                  {habit.completed ? "Completed" : "Complete"}
                </button>
                <button
                  onClick={() => handleRemoveHabit(habit.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HabitTracker;
