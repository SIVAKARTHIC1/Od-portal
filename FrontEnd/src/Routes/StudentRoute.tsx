import { Route } from "react-router-dom";
import Home from "../pages/Student/Home";
import OdForm from "../Features/OnDuty/OdForm";
import OdDetail from "../Features/OnDuty/OdDetail";
import OdTable from "../Features/OnDuty/OdTable";

const StudentRoute = () => (
  <>
    <Route path="home" element={<Home />} />
    <Route path="od-approvals" element={<OdTable />} />
    <Route path="od/:id" index element={<OdDetail />} />
    <Route path="od-apply" element={<OdForm />} />
  </>
);

export default StudentRoute;
