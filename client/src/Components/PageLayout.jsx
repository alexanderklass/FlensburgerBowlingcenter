import { Outlet,Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CookieConsent from "react-cookie-consent";

const PageLayout = () => {
  return (
    <main className="flex h-screen flex-col">
      <Header className={"bg-zinc-800 text-white text-center p-3"} />
      <Outlet />
      <CookieConsent
        location="bottom"
        buttonText="OK"
        disableButtonStyles
        buttonClasses="rounded bg-blue-700 hover:bg-blue-600 transition text-white p-1 mr-10 w-20"
        containerClasses="z-10 fixed bot-0 left-0 w-screen bg-red-500 flex flex-row justify-between items-center md:h-20"
        contentClasses="m-2 text-white"
        disableStyles
      >
        <p>
          Diese Website verwendet Cookies, um Ihnen ein optimales
          Nutzungserlebnis zu bieten. Durch die weitere Nutzung stimmen Sie der
          Verwendung von Cookies zu.{" "}
          <Link to={"/datenschutz"}>
            <span className="cursor-pointer underline">
              Weitere Informationen
            </span>
          </Link>
        </p>
      </CookieConsent>
      <Footer className={"bg-zinc-800 bottom-0 mt-auto inset-x-0 text-white"} />
    </main>
  );
};

export default PageLayout;
