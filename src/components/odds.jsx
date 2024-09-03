import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Odds() {
  const location = useLocation();
  const { homeTeam, awayTeam, percentages } = location.state || {};

  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const input5Ref = useRef();
  const input6Ref = useRef();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const odds = [
      ((1 / input1Ref.current.value) * 100).toFixed(2) + "%" + "  (W1)",
      ((1 / input2Ref.current.value) * 100).toFixed(2) + "%" + " (X)",
      ((1 / input3Ref.current.value) * 100).toFixed(2) + "%" + " (W2)",
      ((1 / input4Ref.current.value) * 100).toFixed(2) + "%" + "(over2.5)",
      ((1 / input5Ref.current.value) * 100).toFixed(2) + "%" + "(under2.5)",
      ((1 / input6Ref.current.value) * 100).toFixed(2) + "%" + "  (btts)",
    ];

    const differences = [
      {
        type: "W1",
        result:
          ((1 / input1Ref.current.value) * 100).toFixed(2) - percentages[0],
      },
      {
        type: "X",
        result:
          ((1 / input2Ref.current.value) * 100).toFixed(2) - percentages[1],
      },
      {
        type: "W2",
        result:
          ((1 / input3Ref.current.value) * 100).toFixed(2) - percentages[2],
      },
      {
        type: "over2.5",
        result:
          ((1 / input4Ref.current.value) * 100).toFixed(2) - percentages[3],
      },
      {
        type: "under2.5",
        result:
          ((1 / input5Ref.current.value) * 100).toFixed(2) - percentages[4],
      },
      {
        type: "btts",
        result:
          ((1 / input6Ref.current.value) * 100).toFixed(2) - percentages[5],
      },
    ];

    navigate("/final", {
      state: { homeTeam, awayTeam, percentages, odds, differences },
    });
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center min-h-screen">
      <div className="my-6">
        <h1 className="text-2xl font-bold">Odds</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex gap-2 mb-4">
          <div className="relative">
            <input
              ref={input1Ref}
              type="number"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="W1"
            />
          </div>
          <div className="relative">
            <input
              ref={input2Ref}
              type="number"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="X"
            />
          </div>
          <div className="relative">
            <input
              ref={input3Ref}
              type="number"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="W2"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <input
              ref={input4Ref}
              type="number"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="over2.5"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <input
              ref={input5Ref}
              type="number"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="under2.5"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <input
              ref={input6Ref}
              type="number"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="btts-yes"
            />
          </div>
        </div>

        <div
          onClick={handleSubmit}
          className="mt-6 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 cursor-pointer text-center w-full"
        >
          Submit
        </div>
      </div>
    </div>
  );
}
