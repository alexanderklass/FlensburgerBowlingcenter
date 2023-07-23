import MyCalendar from "./components/MyCalendar";
import { Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const Arbeitszeiten = () => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <button>
        <Link to={"/portal"}>
          <BsArrowLeftSquareFill className="hover:scale-105 transition absolute left-2 top-2 text-4xl" />
        </Link>
      </button>

      <MyCalendar />
    </div>
  );
};

export default Arbeitszeiten;
