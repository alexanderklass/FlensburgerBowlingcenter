import sommerAngebot from "../img/sommer-angebot.jpg";
import Pic1 from "../Img/schuhe.jpg";
import Pic2 from "../Img/disco-bowling-3.jpg";
import schlagerfest from "../Img/schlager-abgesagt.jpg";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <section>
      <div className="mx-2 my-10 grid grid-cols-1 justify-items-center gap-2 md:grid-cols-2">
        <div className="max-w-md md:justify-self-end">
          <div className="relative rounded-lg border border-gray-700 bg-zinc-800 shadow">
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
            <span className="absolute left-9 top-1 mr-2 w-10/12 rounded bg-yellow-300 px-2.5 py-0.5 text-sm font-medium text-black opacity-90">
              Reservierungen sind nur telefonisch möglich unter:{" "}
              <Link to={"tel:+49046148087676"}>
                <span>0461-48087676</span>
              </Link>
            </span>
          </div>
        </div>
        <div className="max-w-md md:justify-self-start">
          <div className="rounded-lg border border-gray-700 bg-white bg-zinc-800 shadow">
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
            className="w-full max-w-md rounded-lg shadow-md shadow-black transition hover:scale-105"
          />
        </div>
        <div className="md:justify-self-start">
          <img
            src={sommerAngebot}
            alt="Flensburger-Bowlingcenter"
            className="w-full max-w-md rounded-lg shadow-md shadow-black transition hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Start;
