import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Navigate to the final component with the home and away team data
    navigate("/prob", {
      state: {
        homeTeam,
        awayTeam,
      },
    });
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="mb-4">
          <div className="relative">
            <input
              id="input1"
              type="text"
              value={homeTeam}
              onChange={(e) => setHomeTeam(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Home Team"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <input
              id="input2"
              type="text"
              value={awayTeam}
              onChange={(e) => setAwayTeam(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Away Team"
              required
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 cursor-pointer text-center w-full"
        >
          Next
        </button>
      </div>
    </div>
  );
}
