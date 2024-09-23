import { user } from "../../../assets/index";

const StudentDetail = () => (
    <div className="basis-[50%] bg-secondary px-5 py-3 rounded-md h-full flex items-center gap-5 min-h-[250px]">
      <img src={user} alt="" className="rounded-md" />
      <div className="space-y-2">
        <h1>
          Name : <span>Gokulakirshnan K</span>
        </h1>
        <h1>
          RollNo : <span>7376221EC164</span>
        </h1>
        <h1>
          Dep : <span>Electronics and Communication</span>
        </h1>
        <h1>
          Mentor : <span>ABINAYA M ( EC10725 )</span>
        </h1>
        <h1>
          Special lab : <span>INACTIVE | SUNDAR S</span>
        </h1>
      </div>
    </div>
  );
  
  export default StudentDetail;
  