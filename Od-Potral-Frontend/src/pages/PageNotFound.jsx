import { Link } from "react-router-dom";
import { NotFound } from "../assets/index";

const PageNotFound= () => (
  <div className="h-screen flex items-center justify-center flex-col gap-3 bg-primary">
    <img src={NotFound} alt="page not found" />
    <div className="flex items-center gap-2 flex-col">
      <h1 className="text-3xl font-semibold text-primary-text">Page Not Found</h1>
      <Link
        className="underline text-sm cursor-pointer text-blue-700"
        to="/login"
      >
        &larr; move to home
      </Link>
    </div>
  </div>
);

export default PageNotFound;
