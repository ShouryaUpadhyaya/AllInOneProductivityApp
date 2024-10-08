import React from "react";
import HabitTracker from "./HabitTracker";
import ToDoList from "./ToDoList";
import DayReview from "./DayReview";
import HealthBar from "./HealthBar";

const Layout = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="to-do-list col-span-2 bg-white p-6 shadow-md rounded-lg">
        <ToDoList />
      </div>
      <div className="habit-tracker col-span-2 bg-white p-6 shadow-md rounded-lg">
        <HabitTracker />
      </div>
      <div className="habit-tracker col-span-3 bg-white p-6 shadow-md rounded-lg">
        <DayReview />
      </div>
      <div className="habit-tracker col-span-1 bg-white p-6 shadow-md rounded-lg">
        <HealthBar />
      </div>
    </div>
  );
};

export default Layout;
