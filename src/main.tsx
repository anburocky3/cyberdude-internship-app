import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./views/homepage.tsx";
import BrowseByDates from "./views/browse-by-dates.tsx";
import DayDetail from "./views/day-detail.tsx";
import Faq from "./views/faq.tsx";
import About from "./views/about.tsx";
import Resources from "./views/resources.tsx";
import PageNotFound from "./views/errors/404.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <PageNotFound />,
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
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/about-cyberdude",
    element: <About />,
  },
  {
    path: "/404",
    element: <PageNotFound />,
  },
  // {
  //   path: '/*',
  //   redirect:
  // }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
