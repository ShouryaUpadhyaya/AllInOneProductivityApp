import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, completeTask, removeTask } from "../redux/tasksSlice";
import { increaseHealth, increaseLevel, reSetHealth } from "../redux/userSlice";

const ToDoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const user = useSelector((state) => state.user);
  const [taskName, setTaskName] = useState("");
  const [taskDifficulty, setTaskDifficulty] = useState("Medium");

  const handleCompleteTask = (taskId, taskDifficulty) => {
    dispatch(completeTask(taskId));
    switch (taskDifficulty) {
      case "Easy":
        dispatch(increaseHealth(10));
        break;
      case "Medium":
        dispatch(increaseHealth(20));
        break;
      case "Hard":
        dispatch(increaseHealth(30));
        break;
      default:
        break;
    }
  };
  if (user.health >= 100) {
    dispatch(increaseLevel());
    dispatch(reSetHealth());
  }

  const handleAddTask = () => {
    if (!taskName) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      difficulty: taskDifficulty,
      completed: false,
    };

    dispatch(addTask(newTask));
    setTaskName("");
  };
  const handleDeleteTask = (taskId) => {
    dispatch(removeTask(taskId));
  };
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mr-2 flex-grow"
        />
        <select
          value={taskDifficulty}
          onChange={(e) => setTaskDifficulty(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mr-2"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white rounded-lg px-4 hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      {tasks.map((task) => (
        <div
          key={task.id}
          className={`flex justify-between items-center p-2 border-b ${
            task.completed ? "bg-green-200" : ""
          }`}
        >
          <p className={`${task.completed ? "line-through" : ""}`}>
            {task.name} - Difficulty: {task.difficulty}
          </p>
          <div>
            <button
              onClick={() => handleCompleteTask(task.id, task.difficulty)}
              className={`${
                task.completed ? "bg-gray-300" : "bg-green-500"
              } text-white rounded-lg px-4 hover:bg-green-600`}
              disabled={task.completed}
            >
              {task.completed ? "Completed" : "Complete Task"}
            </button>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-500 text-white rounded-lg ml-5 px-3 hover:bg-red-600"
            >
              Delete Task
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
