import React from "react";

interface StatusToTagType {
  pending: string;
  approved: string;
  rejected: string;
}

const statusToTagName: StatusToTagType = {
  pending: "bg-blue-700",
  approved: "bg-green-700",
  rejected: "bg-red-700",
};

interface OdRowProps {
  data: {
    name: string;
    rollNumber: string;
    mentorCode: string;
    specialLabCode: string;
    eventName: string;
    type: string;
    fromDate: string;
    toDate: string;
    approvalStatus: keyof StatusToTagType;
  };
}

const OdRow: React.FC<OdRowProps> = ({ data }) => {
  const statusClass = statusToTagName[data.approvalStatus];
  console.log(statusClass);

  return (
    <tr className="text-base px-3 border-b border-gray-800 text-gray-500">
      <td className="p-5">
        <input type="checkbox" />
      </td>

      {/* Name */}
      <td className="font-semibold ">{data.name}</td>

      {/* Roll Number */}
      <td className="font-medium ">{data.rollNumber}</td>

      {/* Mentor Code */}
      <td className="font-medium ">{data.mentorCode}</td>

      {/* Special Lab Code */}
      <td className="font-medium ">{data.specialLabCode}</td>

      {/* Event Name */}
      <td className="font-medium ">{data.eventName}</td>

      {/* Event Type */}
      <td className="font-medium ">{data.type}</td>

      {/* From Date - To Date */}
      <td className="font-medium ">{data.fromDate}</td>

      <td className="font-medium ">{data.toDate}</td>

      {/* Approval Status */}
      <td className="font-semibold text-gray-100">
        <span
          className={`${statusClass}
            text-white px-3 py-1 rounded-md`}
        >
          {data.approvalStatus}
        </span>
      </td>
    </tr>
  );
};

export default OdRow;
