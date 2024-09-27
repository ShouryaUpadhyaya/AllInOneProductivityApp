import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLevel } from "../redux/userSlice";
const HealthBar = () => {
  const dispatch = useDispatch();
  const health = useSelector((state) => state.user.health);
  const level = useSelector((state) => state.user.level);
  const [userLevel, setUserLevel] = useState(1);

  const getCharacterImage = (level) => {
    if (level >= 100) return "src/assets/titan_league.png";
    if (level >= 75) return "src/assets/champion_league.png";
    if (level >= 60) return "src/assets/crystal_league.png";
    if (level >= 50) return "src/assets/master_league.png";
    if (level >= 20) return "src/assets/gold_league.png";
    if (level >= 10) return "src/assets/silver_league.png";
    if (level >= 5) return "src/assets/bronze_league.png";
    return "src/assets/no_league.png";
  };

  return (
    <div className="p-4 bg-gray-100 shadow-lg rounded-lg max-w-md mx-auto ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Health & Level</h2>
      </div>

      <div className="flex flex-col items-center mb-6">
        <img
          src={getCharacterImage(level)}
          alt="Character Visual"
          className="w-32 h-32 mb-4"
        />
        <p className="text-lg font-semibold">Level: {level}</p>
      </div>

      <div className="mb-6">
        <p className="font-medium mb-1">Health: {health}</p>
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${health}%` }}
          />
        </div>
      </div>
      <div className="mb-6">
        <input
          type="number"
          value={userLevel}
          onChange={(e) => {
            const newLevel = parseInt(e.target.value, 10);
            setUserLevel(newLevel);
            dispatch(setLevel(newLevel));
          }}
        />
      </div>
    </div>
  );
};

export default HealthBar;
