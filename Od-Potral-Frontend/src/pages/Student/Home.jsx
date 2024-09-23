import AttendanceDetail from "./components/AttendanceDetail";
import StudentDetail from "./components/StudentDetail";

const Home = () => (
  <div className="flex items-stretch w-full gap-5 ">
    <StudentDetail />
    <AttendanceDetail />
  </div>
);

export default Home;
