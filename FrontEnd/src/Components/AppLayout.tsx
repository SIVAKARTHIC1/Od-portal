import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import { useAuthContext } from "../context/AuthContext/authContext";

const Layout: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <div className="flex h-screen text-secondary-text">
      <aside className="basis-[20%] bg-secondary h-full">
        <NavBar isStudent={user?.role == "student"} />
      </aside>
      <main className="basis-[80%] flex flex-col h-full">
        <Header />
        <section className="flex-1 py-8 px-10 overflow-auto bg-primary">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
