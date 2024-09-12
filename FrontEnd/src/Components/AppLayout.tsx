import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";

const Layout: React.FC = () => (
  <div className="flex h-screen text-secondary-text">
    <aside className="basis-[20%] bg-secondary h-full">
      <NavBar isStudent={true} />
    </aside>
    <main className="basis-[80%] flex flex-col h-full">
      {/* <header className="py-5 bg-secondary w-full">header</header> */}
      <Header/>
      <section className="flex-1 py-8 px-10 overflow-auto bg-primary">
        <Outlet />
      </section>
    </main>
  </div>
);

export default Layout;
