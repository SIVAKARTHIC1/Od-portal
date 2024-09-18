import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authProvider";

const OdDetail = () => {
  const odInfo = {
    name: "John Doe",
    rollNumber: "12345",
    mentorCode: "M123",
    specialLabCode: "SL456",
    eventName: "Tech Symposium",
    fromTime: "10:00 AM",
    toTime: "02:00 PM",
    type: "External",
    fromDate: "2024-09-01",
    toDate: "2024-09-05",
    status: "pending",
  };

  const navigate = useNavigate();
  const {state:{user}}=useAuthContext()

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h1>#OD-1234</h1>
        <span
          className="text-blue-500 underline cursor-pointer"
          onClick={() => navigate(-1)}
        >
          &larr; back
        </span>
      </div>
      <div className="space-y-5 bg-secondary px-7 py-5 rounded-md">
        <div className="flex gap-4">
          {/* Name */}
          <div className="flex flex-col flex-1">
            <label className="text-crimson mb-1">Name</label>
            <p className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white">
              {odInfo.name}
            </p>
          </div>

          {/* Roll Number */}
          <div className="flex flex-col flex-1">
            <label className="text-crimson mb-1">Roll Number</label>
            <p className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white">
              {odInfo.rollNumber}
            </p>
          </div>
        </div>

        {/* Mentor Code and Special Lab Code */}
        <div className="flex gap-4">
          <div className="flex flex-col flex-1">
            <label className="text-crimson mb-1">Mentor Code</label>
            <p className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white">
              {odInfo.mentorCode}
            </p>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-crimson mb-1">Special Lab Code</label>
            <p className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white">
              {odInfo.specialLabCode}
            </p>
          </div>
        </div>

        {/* Event Name */}
        <div className="flex flex-col w-full">
          <label className="text-crimson mb-1">Event Name</label>
          <p className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white">
            {odInfo.eventName}
          </p>
        </div>

        {/* From Time and To Time */}
        <div className="flex gap-4">
          <div className="flex flex-col flex-1">
            <label className="text-crimson mb-1">From Time</label>
            <p className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white">
              {odInfo.fromTime}
            </p>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-crimson mb-1">To Time</label>
            <p className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white">
              {odInfo.toTime}
            </p>
          </div>
        </div>

        {/* Type */}
        <div className="flex flex-col flex-1">
          <label className="text-crimson mb-1">Type</label>
          <p className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white">
            {odInfo.type}
          </p>
        </div>

        {/* Additional fields */}
        <div className="flex gap-4">
          <div className="flex flex-col flex-1">
            <label className="text-crimson mb-1">From Date</label>
            <p className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white">
              {odInfo.fromDate}
            </p>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-crimson mb-1">To Date</label>
            <p className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white">
              {odInfo.toDate}
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-crimson mb-1">Status</label>
          <p className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white">
            {odInfo.status}
          </p>
        </div>
      </div>
      {odInfo.status == "pending"&& user?.role=="faculty" ? (
        <div className="flex justify-end gap-3 mt-5">
          <button className="px-5 py-2 bg-red-500 rounded-md text-white">
            Reject
          </button>
          <button className="px-5 py-2 bg-green-500 rounded-md text-white">
            Approve
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default OdDetail;
