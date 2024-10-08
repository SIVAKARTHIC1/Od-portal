import { HiEllipsisVertical } from "react-icons/hi2";
import { HiEye } from "react-icons/hi";
import { useAuthContext } from "../../../context/authProvider";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../Utils/helper";

const statusToTagName = {
  pending: "bg-blue-700",
  approved: "bg-green-700",
  rejected: "bg-red-700",
};

const OdRow = ({ data }) => {
  const statusClass = statusToTagName[data.approvalStatus];
  const isStudent = useAuthContext().state?.user?.role === "student";
  const navigate = useNavigate();

  return (
    <tr className="text-sm px-3 border-b border-gray-800 text-gray-500">
      <td className="p-5">
        <input type="checkbox" />
      </td>

      {/* Name */}
      <td className="font-semibold">{data?.student?.name}</td>

      {/* Roll Number */}
      <td className="font-medium">{data?.student?.rollNo}</td>

      <td className="font-medium">{data?.student?.year}</td>

      {/* Mentor Code */}
      <td className="font-medium">{data?.mentorCode}</td>

      {/* Event Type */}
      <td className="font-medium">{data?.odType}</td>

      {/* Event Name */}
      <td className="font-medium">{data?.event?.name || "N/A"}</td>

      {/* From Date - To Date */}
      <td className="font-medium">{formatDate(data?.fromDate)}</td>
      <td className="font-medium">{formatDate(data?.toDate)}</td>

      {/* Approval Status */}
      <td className="font-semibold text-gray-100">
        <span className={`${statusClass} text-gray-300 px-3 py-1 rounded-md`}>
          {data?.approvalStatus}
        </span>
      </td>

      <td className="px-2">
        {isStudent ? (
          <span
            className="px-1 py-2 rounded-md flex items-center justify-center bg-secondary cursor-pointer"
            onClick={() => navigate(`/student/od/${data?._id}`)}
          >
            <HiEye />
          </span>
        ) : (
          <span className="px-1 py-2 rounded-md flex items-center justify-center bg-secondary cursor-pointer">
            <HiEllipsisVertical />
          </span>
        )}
      </td>
    </tr>
  );
};

export default OdRow;
