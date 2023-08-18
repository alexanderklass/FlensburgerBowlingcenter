import sport1 from "../../assets/images/einladung-liga.jpg";
import sport2 from "../../assets/images/liga-bild.jpg";
import firmenliga from "../../assets/images/firmenliga.png";
const Betriebssport = () => {
  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center gap-2 md:flex-row md:items-stretch">
        <div className="md:screen w-full max-w-md rounded-lg  border  border-gray-700 bg-zinc-800 p-5 shadow">
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
            className="hover inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-center  text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-blue-800"
          >
            Firmenliga
            <svg
              aria-hidden="true"
              className="-mr-1 ml-2 h-4 w-4"
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
        <div className="md:screen flex w-full max-w-md flex-col justify-center rounded-lg border border-gray-700 bg-zinc-800 p-5 shadow">
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
            className="hover inline-flex w-[200px] items-center rounded-lg bg-blue-600 px-3 py-2 text-center  text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-blue-800"
          >
            InterBowlingFlensburg
            <svg
              aria-hidden="true"
              className="-mr-1 ml-2 h-4 w-4"
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

      <div className="mt-5 flex flex-col items-center justify-center gap-2 md:flex-row">
        <div className="max-w-md md:w-full md:w-screen">
          <img
            src={sport1}
            className="rounded-lg shadow-md shadow-black transition hover:scale-105"
          />
        </div>
        <div className="w-screen max-w-md md:w-full">
          <img
            src={sport2}
            className="rounded-lg shadow-md shadow-black transition hover:scale-105"
          />
        </div>
      </div>

      <div className="mb-5 mt-5 flex flex-col items-center justify-center gap-2 md:flex-row md:items-stretch">
        <div className="w-full max-w-md max-w-md rounded-lg border  border-gray-700  bg-zinc-800 p-6 shadow md:w-screen">
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

        <div className="max-w-mdm w-full max-w-md rounded-lg border  border-gray-700  bg-zinc-800 p-6 shadow md:w-screen">
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
