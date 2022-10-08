import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Order from "./components/Orders/Order";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/orders",
        element: <Order></Order>,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
    ],
  },
  {
    path: "/orders",
    element: <Order></Order>,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
