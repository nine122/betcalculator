import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../components/home.jsx";
import Prob from "../components/prob.jsx";
import Odds from "../components/odds.jsx";
import Final from "../components/final.jsx";

export default function index() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/prob",
          element: <Prob />,
        },
        {
          path: "/odds",
          element: <Odds />,
        },
        {
          path: "/final",
          element: <Final />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
