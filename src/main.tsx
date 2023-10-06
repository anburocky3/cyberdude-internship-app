import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./views/homepage.tsx";
import BrowseByDates from "./views/browse-by-dates.tsx";
import DayDetail from "./views/day-detail.tsx";
import Faq from "./views/faq.tsx";

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
  {
    path: "/faqs",
    element: <Faq />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
