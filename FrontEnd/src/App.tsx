import PageNotFound from "./Components/PageNotFound";
import LoginForm from "./Features/Auth/LoginForm";
import "./styles/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={"login"} element={<LoginForm />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
