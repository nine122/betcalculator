import { useLocation } from "react-router-dom";

export default function Final() {
  const location = useLocation();
  const { homeTeam, awayTeam, percentages, odds, differences } =
    location.state || {}; // Destructure percentages from the location state

  console.log(homeTeam);

  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-row gap-52">
          <div className="text-3xl font-bold">{homeTeam}</div>
          <div className="text-3xl font-bold">{awayTeam}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm flex justify-around">
          <div>
            <h1 className="text-xl my-3 font-bold">Probabilities</h1>
            <ul className="list-disc list-inside">
              {percentages && percentages.length > 0 ? (
                percentages.map((percentage, index) => (
                  <li className="list-none" key={index}>
                    {percentage}%
                  </li>
                ))
              ) : (
                <li>No percentages provided</li>
              )}
            </ul>
          </div>
          <div>
            <h1 className="text-xl my-3 font-bold">Odds</h1>
            <ul className="list-disc list-inside">
              {odds && odds.length > 0 ? (
                odds.map((odd, index) => (
                  <li className="list-none" key={index}>
                    {odd}
                  </li>
                ))
              ) : (
                <li>No odds provided</li>
              )}
            </ul>
          </div>
        </div>
        <div className="bg-blue-300 mt-6 p-4 rounded-lg shadow-lg w-full max-w-sm">
          <h1 className="text-xl my-3 font-bold">Differences</h1>
          <ul className="list-disc list-inside">
            {differences && differences.length > 0 ? (
              differences
                .filter((difference) => difference.result > 0) // Filter to show only positive results
                .map((difference, index) => (
                  <li className="list-none" key={index}>
                    {difference.type}: {difference.result.toFixed(2)}
                  </li>
                ))
            ) : (
              <li>No positive differences</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
