import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const PageLayout = () => {
  return (
    <>
      <Header className={"bg-zinc-800 text-white text-center p-3"} />
      <Outlet />
      <Footer className={"bg-zinc-800 bottom-0 mt-auto inset-x-0 text-white"} />
    </>
  );
};

export default PageLayout;
