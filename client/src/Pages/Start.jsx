import sommerAngebot from "../img/sommer-angebot.jpg";
import Pic1 from "../Img/schuhe.jpg";
import Pic2 from "../Img/disco-bowling-3.jpg";
import schlagerfest from "../Img/schlagerfest.gif"
import {Link} from "react-router-dom"

const Start = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-2 my-10 mx-2">
        <div className="max-w-md md:justify-self-end">
          <div className="relative border rounded-lg shadow bg-zinc-800 border-gray-700">
            <img
              className="rounded-t-lg"
              src={Pic1}
              alt="Flensburger-Bowlingcenter"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Herzlich Willkommen im{" "}
                <span className="text-blue-500">
                  Flensburger Bowlingcenter!
                </span>
              </h5>
              <p className="mb-3 font-normal text-gray-400">
                Egal ob Jung oder Alt, ob Anfänger oder Profi, ob mit Freunden,
                Familie oder in geselliger Runde mit Arbeitskollegen, hier
                erleben Sie gemeinsam mit unserem Team eine schöne Zeit mit
                Spiel, Spaß und guter Stimmung. Wir freuen uns auf Euch!
              </p>
            </div>
            <span className="absolute w-10/12 top-1 left-9 text-sm font-medium mr-2 px-2.5 py-0.5 rounded opacity-90 bg-yellow-300 text-black">
              Reservierungen sind nur telefonisch möglich unter: <Link to={"tel:+49046148087676"}><span>0461-48087676</span></Link> 
            </span>
          </div>
        </div>
        <div className="max-w-md md:justify-self-start">
          <div className="bg-white border rounded-lg shadow bg-zinc-800 border-gray-700">
            <img
              className="rounded-t-lg"
              src={Pic2}
              alt="Flensburger-Bowlingcenter"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Disco Bowling <span className="text-blue-500">Freitags</span> ab
                21 Uhr & <span className="text-blue-500">Samstags</span> ab 20
                Uhr
              </h5>
              <p className="mb-3 font-normal text-gray-400">
                Wir spielen bei Schwarzlicht und toller Musik, aus den 70er,
                80er, 90er und 2000er Jahren, in gemütlicher Runde. Denkt bitte
                an eine rechtzeitige Buchung, da das Disco Bowling sehr beliebt
                ist. Findet ihr heraus, was es mit dem roten Pin auf sich hat?
              </p>
            </div>
          </div>
        </div>
        <div className="md:justify-self-end">
          <img
            src={schlagerfest}
            alt="Flensburger-Bowlingcenter"
            className="rounded-lg max-w-md w-full shadow-md shadow-black hover:scale-105 transition"
          />
        </div>
        <div className="md:justify-self-start">
          <img
            src={sommerAngebot}
            alt="Flensburger-Bowlingcenter"
            className="rounded-lg max-w-md w-full shadow-md shadow-black hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default Start;
