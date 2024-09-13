import Layout from "./Components/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Faculty/Dashboard";
import OdForm from "./Features/OnDuty/OdForm";
import OdTable from "./Features/OnDuty/OdTable";
import Login from "./pages/Login";
import Home from "./pages/Student/Home";
import OdDetail from "./Features/OnDuty/OdDetail";
import "./styles/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to={"/dashboard"} />} />
      <Route path={"login"} element={<Login />} />
      <Route element={<Layout />}>
      
      </Route>
      <Route path={"*"} element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
