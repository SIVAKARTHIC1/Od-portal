import { useNavigate } from "react-router-dom";
import OdTable from "../../Features/OnDuty/OdTable";

const OdStudent = () => {
  const navigate = useNavigate();
 console.log("odstudent")
  return (
    <div className="space-y-5">
      <OdTable />
      <button
        className="text-white px-5 py-2 bg-blue-500 rounded-md  hover:bg-blue-600 ms-auto block"
        onClick={() => navigate("/student/od-apply")}
      >
        Apply Od
      </button>
    </div>
  );
};

export default OdStudent;
