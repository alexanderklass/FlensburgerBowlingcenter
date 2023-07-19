import Pic1 from "../../assets/images/jahres-dank.png";
import Pic2 from "../../assets/images/heavy-metal-event.png";
import Pic3 from "../../assets/images/bowling-event.jpg";
const Events = () => {
  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center gap-2 md:flex-row">
        <div className="w-full max-w-md md:w-screen">
          <img src={Pic1} className="rounded-lg shadow-md shadow-black hover:scale-105 transition" />
        </div>
        <div className="w-full max-w-md md:w-screen">
          <img src={Pic2} className="rounded-lg shadow-md shadow-black hover:scale-105 transition" />
        </div>
      </div>
      <div className="mb-10 mt-5 flex flex-col items-center justify-center gap-2 md:flex-row">
        <div className="w-full max-w-md md:w-screen">
          <img src={Pic3} className="rounded-lg shadow-md shadow-black hover:scale-105 transition" />
        </div>
      </div>
    </>
  );
};

export default Events;
