import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
const SidebarLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default SidebarLayout;
