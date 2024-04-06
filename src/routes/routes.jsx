import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      children:[
          {
            path:'/',
            element:<Home />,
            loader: () => fetch('/news.json')
          }
      ]
    },
  ]);

  export default router;