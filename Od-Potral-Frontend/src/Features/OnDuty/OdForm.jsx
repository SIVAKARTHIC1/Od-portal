import { useForm } from "react-hook-form";
import DatePicker from "./components/DatePicker";
import { useState } from "react";
import { formatDate, formateTime } from "../../Utils/helper";
import { useOdContext } from "../../context/odProvider";

const OdForm = () => {
  const { applyOd } = useOdContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const odType = watch("odType", "event");

  const [date, setDate] = useState({
    fromDate: new Date(),
    toDate: new Date(),
  });

  const onSubmit = (data) => {
    const formdata = {
      ...data,
      fromTime: formateTime(data.fromTime),
      toTime: formateTime(data.toTime),
    };
    applyOd(formdata);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex text-golden p-4 gap-4 w-full">
        {/* Right Section - Multiple Inputs */}
        <div className="basis-[75%] bg-secondary rounded-md flex flex-col gap-6 px-6 py-10">
          {/* Row with two inputs */}
          <div className="flex gap-4">
            {/* Input 1: Student Name */}
            <div className="flex flex-col flex-1">
              <label htmlFor="student" className="text-crimson mb-1">
                Name
              </label>
              <input
                type="text"
                id="student"
                placeholder="Enter your name"
                className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none"
                {...register("student", { required: "Name is required" })}
              />
              {errors.student && (
                <span className="text-red-500">{errors.student.message}</span>
              )}
            </div>

            {/* Input 2: Mentor Code */}
            <div className="flex flex-col flex-1">
              <label htmlFor="rollNo" className="text-crimson mb-1">
                Roll Number
              </label>
              <input
                type="text"
                id="rollNo"
                placeholder="Enter Roll Number"
                className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none"
                {...register("rollNo", { required: "Roll Number is required" })}
              />
              {errors.rollNo && (
                <span className="text-red-500">{errors.rollNo.message}</span>
              )}
            </div>
          </div>

          {/* Row with two inputs */}
          <div className="flex gap-4">
            {/* Input 5: From Time */}
            <div className="flex flex-col flex-1">
              <label htmlFor="fromTime" className="text-crimson mb-1">
                From Time
              </label>
              <input
                type="time"
                id="fromTime"
                placeholder="From Time"
                className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none"
                {...register("fromTime", { required: "From time is required" })}
              />
              {errors.fromTime && (
                <span className="text-red-500">{errors.fromTime.message}</span>
              )}
            </div>

            {/* Input 6: To Time */}
            <div className="flex flex-col flex-1">
              <label htmlFor="toTime" className="text-crimson mb-1">
                To Time
              </label>
              <input
                type="time"
                id="toTime"
                placeholder="To Time"
                className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none"
                {...register("toTime", { required: "To time is required" })}
              />
              {errors.toTime && (
                <span className="text-red-500">{errors.toTime.message}</span>
              )}
            </div>
          </div>

          {/* Type of Activity */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="mentor" className="text-crimson mb-1">
                Mentor Code
              </label>
              <input
                type="text"
                id="mentor"
                placeholder="Enter Mentor Code"
                className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none"
                {...register("mentor", { required: "Mentor code is required" })}
              />
              {errors.mentor && (
                <span className="text-red-500">{errors.mentor.message}</span>
              )}
            </div>

            <div className="flex flex-col flex-1 mb-auto">
              <label className="text-crimson mb-1">Type</label>
              <select
                className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none"
                {...register("odType", { required: "Type is required" })}
              >
                <option value="event">Event</option>
                <option value="otherActivity">Other Activity</option>
              </select>
              {errors.odType && (
                <span className="text-red-500">{errors.odType.message}</span>
              )}
            </div>
          </div>

          {/* Conditional Inputs */}
          {odType === "event" && (
            <div className="flex flex-col flex-1">
              <label htmlFor="event" className="text-crimson mb-1">
                Event Name
              </label>
              <input
                type="text"
                id="event"
                placeholder="Enter Event Name"
                className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none"
                {...register("event", { required: "Event name is required" })}
              />
              {errors.event && (
                <span className="text-red-500">{errors.event.message}</span>
              )}
            </div>
          )}

          {odType === "otherActivity" && (
            <div className="flex flex-col flex-1">
              <label htmlFor="reason" className="text-crimson mb-1">
                Reason
              </label>
              <input
                type="text"
                id="reason"
                placeholder="Enter reason"
                className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none"
                {...register("reason", { required: "Reason is required" })}
              />
              {errors.reason && (
                <span className="text-red-500">{errors.reason.message}</span>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-btn-primary text-white px-5 rounded-md py-2 w-fit ms-auto"
          >
            Apply
          </button>
        </div>

        {/* Left Section - DatePicker for From/To */}
        <div className="basis-[25%] flex flex-col gap-5 bg-secondary px-6 py-10">
          <DatePicker
            onDateChange={(date) => setDate(date)}
            selectedDate={date}
          />

          <div className="flex flex-col">
            <label htmlFor="fromDate" className="text-crimson mb-1">
              From
            </label>
            <input
              type="text"
              id="fromDate"
              value={
                date?.fromDate
                  ? formatDate(date?.fromDate)
                  : "Start date is selected"
              }
              disabled
              className="cursor-not-allowed p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none"
            />
          </div>

          {/* To Input */}
          <div className="flex flex-col">
            <label htmlFor="toDate" className="text-crimson mb-1">
              To
            </label>
            <input
              type="text"
              id="toDate"
              value={
                date?.toDate ? formatDate(date?.toDate) : "End date is selected"
              } // Show the selected toDate or placeholder text
              disabled
              className="cursor-not-allowed p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default OdForm;
