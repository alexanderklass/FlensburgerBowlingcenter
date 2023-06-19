import SlideShow from "../Components/SlideShow.jsx";
import tresen1 from "../Img/tresen-1.jpg";
import tresen2 from "../Img/tresen-2.jpg";
import tresen3 from "../Img/tresen-3.jpg";
import veranstaltung1 from "../Img/veranstaltung-1.jpg";
import veranstaltung2 from "../Img/veranstaltung-2.jpg";
import veranstaltung3 from "../Img/veranstaltung-3.jpg";

const Veranstaltungen = () => {
  const tresenSlides = [{ url: tresen1 }, { url: tresen2 }, { url: tresen3 }];
  const veranstaltungSlides = [
    { url: veranstaltung1 },
    { url: veranstaltung2 },
    { url: veranstaltung3 },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row mt-10 mb-5 mx-2 gap-2 justify-center md:items-stretch items-center">
        <div className="max-w-md  border  rounded-lg shadow bg-zinc-800 border-gray-700">
          <SlideShow slides={tresenSlides} />
          <div className="p-5">
            <p className="mb-3 text-sm md:font-normal  text-gray-400">
              In unserer Gastronomie halten wir Speisen für den kleinen, sowie
              auch den großen Hunger für sie bereit. Während des Bowlingspiels
              besteht die Möglichkeit Fingerfoods, wie Pizzabrötchen zu
              genießen. Für den großen Hunger bieten wir am Tisch Speisen aller
              Art an. Unsere Speisen werden alle frisch zubereitet. Unser
              Fleisch kommt frisch aus der Region. Wir bieten auch spezielle
              Sonderangebote für Kindergeburtstage an z.B. Partypizza. Bei
              größeren Veranstaltungen wie Betriebsfeiern und ähnlichem, freuen
              wir uns, mit Ihnen einen persönlichen Termin zu vereinbaren, um
              dann vor Ort, zusammen mit dem Koch Ihre Feier zu besprechen und
              planen.
            </p>
          </div>
        </div>

        <div className="max-w-md  border  rounded-lg shadow bg-zinc-800 border-gray-700">
          <SlideShow slides={veranstaltungSlides} />
          <div className="p-5">
            <p className="mb-3 text-sm md:font-normal  text-gray-400">
              Für Veranstaltungen aller Art halten wir einen Clubraum für bis zu
              80 Personen bereit. Ob Betriebsfeiern, Familienfeste,
              Vereinsfeiern, Sitzungen oder Veranstaltungen wie Fußball,
              Europameisterschaften oder Weltmeisterschaften, alles kannn in
              unserem Clubraum stattfinden. Für Großveranstaltungen kostenlos
              zur Verfügung. Weiter können in diesem Raum auch Feiern mit
              Buffets aller Art stattfinden. Zum Beispiel für Weihnachtsfeiern
              mit Grünkohlessen.
            </p>
            <p className="mb-3 text-sm md:font-normal  text-gray-400">
              Bitte denkt an rechtzeitige Buchung.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Veranstaltungen;
