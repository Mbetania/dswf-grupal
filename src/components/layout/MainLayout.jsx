import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./layout.css";

const MainLayout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
