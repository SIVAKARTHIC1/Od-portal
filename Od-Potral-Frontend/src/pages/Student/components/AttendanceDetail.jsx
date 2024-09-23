import {
  HiClock,
  HiOutlineCalendar,
  HiShoppingBag,
  HiOutlineLogout,
} from "react-icons/hi";

const AttendanceDetail = () => (
  <div className="basis-[50%] bg-secondary px-5 py-3 rounded-md ">
    <div className="grid grid-cols-2 gap-5">
      <div className="px-5 py-5 flex items-center gap-5">
        <div className="bg-green-500 text-white p-4 rounded-md w-fit">
          <HiClock className="w-7 h-7" />
        </div>
        <div>
          <h1>Total Days</h1>
          <span className="text-lg">49</span>
        </div>
      </div>

      <div className="px-5 py-5 flex items-center gap-5">
        <div className="bg-orange-500 text-white p-4 rounded-md w-fit">
          <HiOutlineCalendar className="w-7 h-7" />
        </div>
        <div>
          <h1>Present Days</h1>
          <span className="text-lg">48</span>
        </div>
      </div>

      <div className="px-5 py-5 flex items-center gap-5">
        <div className="bg-sky-500 text-white p-4 rounded-md w-fit">
          <HiShoppingBag className="w-7 h-7" />
        </div>
        <div>
          <h1>On Duty</h1>
          <span className="text-lg">1</span>
        </div>
      </div>

      <div className="px-5 py-5 flex items-center gap-5">
        <div className="bg-red-500 text-white p-4 rounded-md w-fit">
          <HiOutlineLogout className="w-7 h-7" />
        </div>
        <div>
          <h1>Leave</h1>
          <span className="text-lg">0</span>
        </div>
      </div>
    </div>
  </div>
);

export default AttendanceDetail;
