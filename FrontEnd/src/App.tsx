import Layout from "./Components/AppLayout";
import PageNotFound from "./Components/PageNotFound";
import LoginForm from "./Features/Auth/LoginForm";
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
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path={"login"} element={<LoginForm />} />
      <Route element={<Layout />}>
        <Route path="dashboard" index element={<div>hello</div>} />
        <Route path="onDuty" index element={<div>onduty</div>} />
      </Route>
      <Route path={"*"} element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
