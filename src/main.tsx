import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./views/homepage.tsx";
import BrowseByDates from "./views/browse-by-dates.tsx";
import DayDetail from "./views/day-detail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/browse-by-dates",
    element: <BrowseByDates />,
  },
  {
    path: "/internship/:day",
    element: <DayDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
