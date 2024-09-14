import Layout from "./Components/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import "./styles/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./Components/RoleBasedRoute";
import Home from "./pages/Student/Home";
import OdForm from "./Features/OnDuty/OdForm";
import OdDetail from "./Features/OnDuty/OdDetail";
import OdTable from "./Features/OnDuty/OdTable";
import Dashboard from "./pages/Faculty/Dashboard";
import { useAuthContext } from "./context/AuthContext/authContext";

const RoleBasedRedirect = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role === "faculty") {
    return <Navigate to="/faculty/dashboard" />;
  }

  if (user.role === "student") {
    return <Navigate to="/student/home" />;
  }

  return <Navigate to="/login" />;
};

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RoleBasedRedirect />} />
      <Route path="login" element={<Login />} />

      <Route element={<Layout />}>
        <Route
          path="faculty"
          element={<ProtectedRoute requiredRole="faculty" />}
        >
          <Route path="dashboard" index element={<Dashboard />} />
          <Route path="od-approvals" element={<OdTable />} />
          <Route path="od/:id" element={<OdDetail />} />
        </Route>

        <Route
          path="student"
          element={<ProtectedRoute requiredRole="student" />}
        >
          <Route path="home" index element={<Home />} />
          <Route path="od-approvals" element={<OdTable />} />
          <Route path="od/:id" element={<OdDetail />} />
          <Route path="od-apply" element={<OdForm />} />
        </Route>
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
