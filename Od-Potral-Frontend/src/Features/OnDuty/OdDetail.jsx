import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../context/authProvider";
import { formatDate } from "../../Utils/helper";
import InfoField from "./components/InfoField";
import { useOdContext } from "../../context/odProvider";
import { useEffect } from "react";

const OdDetail = () => {
  const odData = {
    _id: "670283c208f8cb190e7c8aab",
    student: {
      _id: "66fa7b4ee93aac7462465285",
      name: "User 1",
      rollNo: "RollNo595",
      year: 4,
      batch: "Batch 6",
      department: "Department 3",
      email: "student1@example.com",
      role: "student",
      __v: 0,
      createdAt: "2024-09-30T10:19:58.766Z",
      updatedAt: "2024-09-30T10:19:58.766Z",
    },
    type: "internal",
    fromDate: "2024-10-14T00:00:00.000Z",
    toDate: "2024-10-15T00:00:00.000Z",
    fromTime: "09:00 AM",
    toTime: "05:00 PM",
    mentor: {
      _id: "66fa7b73828b6eab82e6cf91",
      name: "User 8",
      rollNo: "RollNo618",
      year: 5,
      batch: "Batch 9",
      department: "Department 1",
      email: "faculty8@example.com",
      role: "faculty",
      __v: 0,
      createdAt: "2024-09-30T10:20:35.944Z",
      updatedAt: "2024-09-30T10:20:35.944Z",
    },
    event: {
      _id: "66fa7af8218b690391e11298",
      name: "Event 1",
      fromDate: "2025-05-09T18:30:00.000Z",
      toDate: "2025-05-09T18:30:00.000Z",
      organiser: "College 57",
      location: "City 38",
      __v: 0,
    },
    odType: "others",
    approvalStatus: "pending",
    mentorCode: "M12345",
  };

  const navigate = useNavigate();
  const {
    state: { user },
  } = useAuthContext();

  const { currentOd, getOd, isLoading } = useOdContext();
  const { id } = useParams();
  console.log(id);
  useEffect(
    function () {
      getOd(id);
    },
    [getOd, id]
  );
console.log(currentOd)
  if (isLoading) return <h1>Loading...</h1>;

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
        {/* Student Details */}
        <div className="flex gap-4">
          <InfoField label="Name" content={currentOd?.student?.name} />
          <InfoField label="Roll Number" content={currentOd?.student?.rollNo} />
        </div>

        {/* Mentor Code */}
        <div className="flex gap-4">
          <InfoField label="Mentor Code" content={currentOd?.mentorCode} />
        </div>

        {/* Date Details */}
        <div className="flex gap-4">
          <InfoField
            label="From Date"
            content={formatDate(currentOd?.fromDate)}
          />
          <InfoField label="To Date" content={formatDate(currentOd?.toDate)} />
        </div>

        {/* Time Details */}
        <div className="flex gap-4">
          <InfoField label="From Time" content={currentOd?.fromTime} />
          <InfoField label="To Time" content={currentOd?.toTime} />
        </div>

        {/* OD Type */}
        <InfoField label="Type" content={currentOd?.odType} />

        {/* Event Details (if applicable) */}
        {currentOd?.odType === "event" ? (
          <>
            <div className="flex gap-4">
              <InfoField label="Event Name" content={currentOd?.event?.name} />
              <InfoField
                label="Organizer"
                content={currentOd?.event?.organiser}
              />
            </div>
            <div className="flex gap-4">
              <InfoField label="Location" content={currentOd?.event?.location} />
              <InfoField
                label="Event From Date"
                content={formatDate(currentOd?.event?.fromDate)}
              />
            </div>
            <div className="flex gap-4">
              <InfoField
                label="Event To Date"
                content={formatDate(currentOd?.event?.toDate)}
              />
            </div>
          </>
        ) : (
          <InfoField label="Reason" content={currentOd?.reason} />
        )}

        {/* Approval Status */}
        <InfoField label="Status" content={currentOd?.approvalStatus} />
      </div>

      {/* Action Buttons for Faculty */}
      {currentOd?.status === "pending" && user?.role === "faculty" ? (
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
