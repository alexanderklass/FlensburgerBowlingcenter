import sport1 from "../Img/einladung-liga.jpg";
import sport2 from "../Img/liga-bild.jpg";
import firmenliga from "../Img/firmenliga.png";
const Betriebssport = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch mt-10 gap-2">
        <div className="max-w-md md:screen w-full p-5  border  rounded-lg shadow bg-zinc-800 border-gray-700">
          <img src={firmenliga} className="w-full" />
          <h5 className="mb-2 text-lg font-bold tracking-tight  text-white">
            <span className="text-blue-500">Vereinstraining:</span> Interbowling
            Flensburg
          </h5>
          <h5 className="mb-2 text-lg font-bold tracking-tight  text-white">
            <span className="text-blue-500">Ligen: </span>Betriebssport und
            Freizeitliga
          </h5>
          <a
            href="https://www.joker-shit-happens.de/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover focus:ring-blue-800"
          >
            Firmenliga
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="max-w-md md:screen w-full p-5  border  rounded-lg shadow bg-zinc-800 border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
            Vereinstraining
          </h5>
          <p className="mb-3 font-normal  text-gray-400">
            Jeden Mittwoch von 19:00 bis 22:00Uhr trainiert der Verein
            Interbowling Flensburg auf frisch geölten und präparierten Bahnen
            unter fachkundiger Anleitung. Schaut mal bei Facebook vorbei:
          </p>
          <a
            href="https://www.facebook.com/Inter.Bowling.Flensburg/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover focus:ring-blue-800"
          >
            InterBowlingFlensburg
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-5">
        <div className="md:w-screen md:w-full max-w-md">
          <img
            src={sport1}
            className="rounded-lg shadow-md shadow-black"
          />
        </div>
        <div className="w-screen md:w-full max-w-md">
          <img
            src={sport2}
            className="rounded-lg shadow-md shadow-black"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-5 mb-5 md:items-stretch">
        <div className="max-w-md md:w-screen w-full max-w-md p-6  border  rounded-lg shadow bg-zinc-800 border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
            Betriebssportliga
          </h5>
          <p className="mb-1 font-normal  text-gray-400">
            Für den Betriebssport können sich Gruppen aller Art melden.
            Voraussetzungen sind mindestens vier Spieler*innen. Es wird mit
            Handicap gespielt, dass für jeden individuell berechnet wird. So
            haben auch Anfänger Gruppen Chancen die sogenannten großen zu
            schlagen. Somit ist gewährleistet, dass nicht nur 2 oder 3 Teams die
            Stadtmeisterschaft unter sich ausmachen. Am Ende des Jahres findet
            ein Turnier aus den besten Mannschaften der Montags- und Dienstags
            Liga statt. Auch spielen wir ein Extra Einzel Turnier um die
            Betriebssport Stadtmeisterschaft im Einzel aus. Es wird somit der
            Flensburger Vereinsmeister im Betriebssport Mannschaft sowie Einzel
            ermittelt.
          </p>
        </div>

        <div className="max-w-mdm md:w-screen w-full max-w-md p-6  border  rounded-lg shadow bg-zinc-800 border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
            Freizeitliga
          </h5>
          <p className="mb-1 font-normal  text-gray-400">
            Freitag abends, findet wieder die traditionsreiche Freizeitliga
            statt. Die Freitags Liga findet jeden Freitag von 18:15 Uhr bis
            21:00 Uhr statt. Außer während der Schulferien wird jeden Freitag
            gespielt. Auch hier können Mannschaften ab sofort gemeldet werden.
            Die Mannschaftsanzahl ist begrenzt. Gegründet 1970 von US
            amerikanischen Soldaten, hat sich die Freizeitliga zur wohl
            traditionsreichsten Liga im Flensburger Bowlingcenter entwickelt.
            Vierer Mannschaften spielen dort mit Handicap den Liga Meister aus.
            Die Freizeitliga ist eine reine Spaß Liga mit Wettbewerbscharakter.
            Am Saisonende werden die Meister und Meisterinnen in verschiedenen
            Kategorien bei einer großen Saisonabschlussfeier gekürt.
          </p>
        </div>
      </div>
    </>
  );
};

export default Betriebssport;