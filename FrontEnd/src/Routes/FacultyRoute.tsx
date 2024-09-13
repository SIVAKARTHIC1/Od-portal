import { Route } from "react-router-dom";
import Dashboard from "../pages/Faculty/Dashboard";
import OdTable from "../Features/OnDuty/OdTable";
import OdDetail from "../Features/OnDuty/OdDetail";

const FacultyRoute = () => (
  <>
    <Route path="dashboard" index element={<Dashboard />} />
    <Route path="od-approvals" element={<OdTable />} />
    <Route path="od/:id" index element={<OdDetail />} />
  </>
);

export default FacultyRoute;
