import Pic1 from "../Img/jahres-dank.png"
import Pic2 from "../Img/heavy-metal-event.png"
const Events = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-2 my-10">
        <div className="md:w-screen w-full max-w-md">
          <img src={Pic1} className="rounded-lg"/>
        </div>
        <div className="md:w-screen w-full max-w-md">
          <img src={Pic2} className="rounded-lg"/>
        </div>
    </div>
  )
}

export default Events