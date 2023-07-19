import Pizza_pic from "../../assets/images/pizza-ideal.jpg";
import Schnitzel_pic from "../../assets/images/schnitzel.jpg";
import Speisekarte1 from "../../assets/images/Speisekarte-1.jpg";
import Speisekarte2 from "../../assets/images/Speisekarte-2.jpg";

const Essen = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-10 mb-5 mx-2 gap-2 justify-center md:items-stretch items-center">
        <div className="max-w-md border rounded-lg shadow bg-zinc-800 border-gray-700">
          <img
            className="rounded-t-lg"
            src={Pizza_pic}
            alt="Flensburger-Bowlingcenter"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
              Große Partypizza
            </h5>
            <p className="mb-3 font-normal  text-gray-400">
              Ca. 60x60cm Belag nach Wahl: Salami, Schinken, Margherita und
              Gemüse
            </p>
            <p className="mb-1 text-xl font-normal  text-white">27,00 €</p>
          </div>
        </div>

        <div className="max-w-md  border  rounded-lg shadow bg-zinc-800 border-gray-700">
          <img
            className="rounded-t-lg"
            src={Schnitzel_pic}
            alt="Flensburger-Bowlingcenter"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
              Schnitzel Satt
            </h5>
            <p className="mb-3 font-normal  text-gray-400">
              Ab 10 Personen Mit Champignon- und Paprikasoße, dazu
              Bratkartoffeln und Pommes. Auf Wunsch auch Putenschnitzel oder
              Vegetarische Schnitzel
            </p>
            <p className="mb-1 text-xl font-normal  text-white">22,50 € p.P</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 justify-center items-center md:items-stretch mb-5 mx-2">
        <div>
          <img
            src={Speisekarte1}
            className="rounded-lg max-w-md w-full md:w-screen"
          />
        </div>
        <div>
          <img
            src={Speisekarte2}
            className="rounded-lg max-w-md w-full md:w-screen"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch mb-2 mx-2 gap-2">
        <table className="max-w-md w-full md:w-screen text-sm text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Alkoholfreie Getränke
              </th>
              <th scope="col" className="md:px-4 md:py-3">
                0,3l
              </th>
              <th scope="col" className="md:px-1 md:py-3">
                0,5l
              </th>
              <th scope="col" className="md:px-1 md:py-3 rounded-tr-lg">
                Flasche
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Wasser
                <br />
                (Classic, Medium, Still)
              </th>
              <td className="md:px-4 md:py-2">3,20€</td>
              <td className="md:px-4 md:py-2">4,10€</td>
              <td className="md:px-4 md:py-2">5,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Coca Cola
              </th>
              <td className="md:px-4 md:py-2">3,50€</td>
              <td className="md:px-4 md:py-2">4,30€</td>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Coca Cola light/zero
              </th>
              <td className="md:px-4 md:py-2">3,50€</td>
              <td className="md:px-4 md:py-2">4,30€</td>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Fanta, Sprite, Mezzo Mix
              </th>
              <td className="md:px-4 md:py-2">3,50€</td>
              <td className="md:px-4 md:py-2">4,30€</td>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Sport Vital
              </th>
              <td className="md:px-4 md:py-2">3,50€</td>
              <td className="md:px-4 md:py-2">4,30€</td>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Schweppes Ginger, <br /> Ale Bitter, <br /> Lemon Tonic Water
              </th>
              <td className="md:px-4 md:py-2">3,70€</td>
              <td className="md:px-4 md:py-2">4,50€</td>
              <td className="md:px-4 md:py-2">6,50€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Red Bull 0,25l
              </th>
              <td className="md:px-4 md:py-2">4,00€</td>
              <td className="md:px-4 md:py-2"></td>
              <td className="md:px-4 md:py-2 rounded-br-lg"></td>
            </tr>
          </tbody>
        </table>

        <table className="text-sm w-full md:w-screen max-w-md text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Säfte Nektar
              </th>
              <th scope="col" className="md:px-4 md:py-3">
                0,3l
              </th>
              <th scope="col" className="md:px-4 md:py-3 rounded-tr-lg">
                0,5l
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Apfel
              </th>
              <td className="md:px-4 md:py-2">3,90€</td>
              <td className="md:px-4 md:py-2">3,90€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Banane
              </th>
              <td className="md:px-4 md:py-2">3,90€</td>
              <td className="md:px-4 md:py-2">4,90€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Kirsche
              </th>
              <td className="md:px-4 md:py-2">3,90€</td>
              <td className="md:px-4 md:py-2">4,90€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Orange
              </th>
              <td className="md:px-4 md:py-2">3,90€</td>
              <td className="md:px-4 md:py-2">4,90€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Maracuja
              </th>
              <td className="md:px-4 md:py-2">3,90€</td>
              <td className="md:px-4 md:py-2">4,90€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Kiba
              </th>
              <td className="md:px-4 md:py-2">3,90€</td>
              <td className="md:px-4 md:py-2">4,90€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Ananas
              </th>
              <td className="md:px-4 md:py-2">3,90€</td>
              <td className="md:px-4 md:py-2">4,90€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Rhababer
              </th>
              <td className="md:px-4 md:py-2">3,90€</td>
              <td className="md:px-4 md:py-2 rounded-br-lg">4,90€</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch mb-2 mx-2 gap-2">
        <table className="md:w-screen w-full max-w-md text-sm text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Warme Getränke
              </th>
              <th scope="col" className="md:px-4 md:py-3 rounded-tr-lg">
                Tasse/Becher
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Kaffee
              </th>
              <td className="md:px-4 md:py-2">3,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Capuccino
              </th>
              <td className="md:px-4 md:py-2">4,10€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Latte Machiato
              </th>
              <td className="md:px-4 md:py-2">4,10€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Espresso
              </th>
              <td className="md:px-4 md:py-2">3,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Tee
              </th>
              <td className="md:px-4 md:py-2 rounded-br-lg">3,10€</td>
            </tr>
          </tbody>
        </table>

        <table className="md:w-screen w-full max-w-md text-sm text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Sekt/Wein
              </th>
              <th scope="col" className="md:px-4 md:py-3">
                0,1l
              </th>
              <th scope="col" className="md:px-4 md:py-3 rounded-tr-lg">
                0,2l
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Sekt Hausmarke
              </th>
              <td className="md:px-4 md:py-2">4,30€</td>
              <td className="md:px-4 md:py-2"></td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Prosecco Hausmarke
              </th>
              <td className="md:px-4 md:py-2">4,70€</td>
              <td className="md:px-4 md:py-2"></td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Weiswein/Rotwein Hausmarke
              </th>
              <td className="md:px-4 md:py-2"></td>
              <td className="md:px-4 md:py-2">4,70€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Weissweinschorle
              </th>
              <td className="md:px-4 md:py-2"></td>
              <td className="md:px-4 md:py-2 rounded-br-lg">3,60€</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch mb-2 mx-2 gap-2">
        <table className="max-w-md w-full md:w-screen text-sm text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Bier
              </th>
              <th scope="col" className="md:px-4 md:py-3">
                0,3l
              </th>
              <th scope="col" className="md:px-1 md:py-3 rounded-tr-lg">
                0,5l
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Flensburger vom Fass
              </th>
              <td className="md:px-4 md:py-2">3,80€</td>
              <td className="md:px-4 md:py-2">4,90€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Alster vom Fass
              </th>
              <td className="md:px-4 md:py-2">3,80€</td>
              <td className="md:px-4 md:py-2">4,90€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Original Hofbräu vom Fass
              </th>
              <td className="md:px-4 md:py-2"></td>
              <td className="md:px-4 md:py-2">5,50€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Schneider Weizen hell vom Fass
              </th>
              <td className="md:px-4 md:py-2"></td>
              <td className="md:px-4 md:py-2">4,90€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Schneider Weizen Original, <br /> Kristall, Alkoholfrei
              </th>
              <td className="md:px-4 md:py-2"></td>
              <td className="md:px-4 md:py-2">4,90€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Bananenweizen
              </th>
              <td className="md:px-4 md:py-2"></td>
              <td className="md:px-4 md:py-2">5,10€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Flens Flasche(0,33l), <br />
                Edles Helles, <br />
                Dunkel, Gold, Frei, Malz
              </th>
              <td className="md:px-4 md:py-2">3,80€</td>
              <td className="md:px-4 md:py-2 rounded-br-lg"></td>
            </tr>
          </tbody>
        </table>

        <table className="text-sm w-full md:w-screen max-w-md text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Rum/Vodka/Likör
              </th>
              <th scope="col" className="md:px-4 md:py-3 rounded-tr-lg">
                Longdrinks 4cl
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Bacardi
              </th>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Havana 3 Jahre
              </th>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Havana 7 Jahre
              </th>
              <td className="md:px-4 md:py-2">7,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Captain Morgan
              </th>
              <td className="md:px-4 md:py-2">7,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Rum 1878
              </th>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Wodka Gorbatschow
              </th>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Wodka Danzka
              </th>
              <td className="md:px-4 md:py-2">7,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Capmari
              </th>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Amaretto Kirsch
              </th>
              <td className="md:px-4 md:py-2 rounded-br-lg">6,00€</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch mb-2 mx-2 gap-2">
        <table className="text-sm w-full md:w-screen max-w-md text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Spirituosen/Gin
              </th>
              <th scope="col" className="md:px-4 md:py-3 rounded-tr-lg">
                Longdrinks 4cl
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Pernod
              </th>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Oldesloer Korn
              </th>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Sternmarke
              </th>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Bombay Gin
              </th>
              <td className="md:px-4 md:py-2">7,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Gordons Gin
              </th>
              <td className="md:px-4 md:py-2 rounded-br-lg">6,00€</td>
            </tr>
          </tbody>
        </table>

        <table className="text-sm w-full md:w-screen max-w-md text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Whiskey & Bourbon
              </th>
              <th scope="col" className="md:px-4 md:py-3 rounded-tr-lg">
                Longdrinks 4cl
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Ballantines
              </th>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Jim Beam
              </th>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Tullamore Dew
              </th>
              <td className="md:px-4 md:py-2">7,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Jack Daniels
              </th>
              <td className="md:px-4 md:py-2">7,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Canadian Club
              </th>
              <td className="md:px-4 md:py-2">7,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Southern Comfort
              </th>
              <td className="md:px-4 md:py-2 rounded-br-lg">6,00€</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch mb-2 mx-2 gap-2">
        <table className="text-sm w-full md:w-screen max-w-md text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Flaschen inkl. 2 Flaschen Softgetränke
              </th>
              <th scope="col" className="md:px-4 md:py-3 rounded-tr-lg">
                Preis
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Sternmarke
              </th>
              <td className="md:px-4 md:py-2">25,00€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Oldesloer Korn
              </th>
              <td className="md:px-4 md:py-2">30,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Wodka Gorbatschow
              </th>
              <td className="md:px-4 md:py-2">30,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Ballantines
              </th>
              <td className="md:px-4 md:py-2">50,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Jim Beam
              </th>
              <td className="md:px-4 md:py-2">50,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Tullamore
              </th>
              <td className="md:px-4 md:py-2">60,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Flasche Sekt(Hausmarke)
              </th>
              <td className="md:px-4 md:py-2">18,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Flasche Wein(Hausmarke)
              </th>
              <td className="md:px-4 md:py-2">20,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Jack Daniels
              </th>
              <td className="md:px-4 md:py-2">60,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Havana Club 3 Jahre
              </th>
              <td className="md:px-4 md:py-2">50,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Havana Club 7 Jahre
              </th>
              <td className="md:px-4 md:py-2">60,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Captain Morgan
              </th>
              <td className="md:px-4 md:py-2">50,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Bacardi
              </th>
              <td className="md:px-4 md:py-2">50,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Wodka Danzka
              </th>
              <td className="md:px-4 md:py-2 rounded-br-lg">60,00€</td>
            </tr>
          </tbody>
        </table>

        <table className="text-sm w-full md:w-screen max-w-md text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Kurze
              </th>
              <th scope="col" className="md:px-4 md:py-3 rounded-tr-lg">
                2cl
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Ramazotti
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Jägermeister
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Ouzo
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Bommerlunder
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Gammel Dansk
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Wodka
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Korn/Apfelkorn
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Tquila Silber/Gold
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Berliner Luft
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Saurer Apfel
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Sambuca
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Sangrita rot/grün
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Kleiner Feigling
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Nr.3
              </th>
              <td className="md:px-4 md:py-2">2,50€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Dooley oder Baileys
              </th>
              <td className="md:px-4 md:py-2 rounded-br-lg">3,50€</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch mb-2 mx-2 gap-2">
        <table className="text-sm w-full md:w-screen max-w-md text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Pötte mit Softgetränk(mit Energy + 5,00 €)
              </th>
              <th scope="col" className="md:px-4 md:py-3 rounded-tr-lg">
                Preis
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Sternmarke
              </th>
              <td className="md:px-4 md:py-2">15,00€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Oldesloer Korn
              </th>
              <td className="md:px-4 md:py-2">20,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Wodka
              </th>
              <td className="md:px-4 md:py-2">20,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Bacardi
              </th>
              <td className="md:px-4 md:py-2">25,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Captain Morgan
              </th>
              <td className="md:px-4 md:py-2">30,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Havana Club 3 Jahre
              </th>
              <td className="md:px-4 md:py-2">30,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Havana Club 7 Jahre
              </th>
              <td className="md:px-4 md:py-2">30,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Jack Daniels
              </th>
              <td className="md:px-4 md:py-2">30,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Jim Beam
              </th>
              <td className="md:px-4 md:py-2">30,00€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Tullamore
              </th>
              <td className="md:px-4 md:py-2 rounded-br-lg">30,00€</td>
            </tr>
          </tbody>
        </table>

        <table className="text-sm w-full md:w-screen max-w-md text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Cocktails
              </th>
              <th scope="col" className="md:px-4 md:py-3">
                Mit Alkohol
              </th>
              <th scope="col" className="md:px-4 md:py-3 rounded-tr-lg">
                Ohne Alkohol
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Aperol Spritz
              </th>
              <td className="md:px-4 md:py-2">7,00€</td>
              <td className="md:px-4 md:py-2"></td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Andalö/Sekt
              </th>
              <td className="md:px-4 md:py-2">5,00€</td>
              <td className="md:px-4 md:py-2"></td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Sex on the Beach
              </th>
              <td className="md:px-4 md:py-2">7,00€</td>
              <td className="md:px-4 md:py-2"></td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Pina Colada
              </th>
              <td className="md:px-4 md:py-2">7,50€</td>
              <td className="md:px-4 md:py-2"></td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Mai Tai
              </th>
              <td className="md:px-4 md:py-2">7,00€</td>
              <td className="md:px-4 md:py-2"></td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Strawberry Colada
              </th>
              <td className="md:px-4 md:py-2"></td>
              <td className="md:px-4 md:py-2">6,00€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Sportsmann
              </th>
              <td className="md:px-4 md:py-2"></td>
              <td className="md:px-4 md:py-2 rounded-br-lg">6,00€</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch mb-10 mx-2 gap-2">
        <table className="text-sm w-full md:w-screen max-w-md text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Grappa
              </th>
              <th scope="col" className="md:px-4 md:py-3 rounded-tr-lg">
                2cl
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Di Otto Lune
              </th>
              <td className="md:px-4 md:py-2">8,50€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Prime Uve
              </th>
              <td className="md:px-4 md:py-2 rounded-br-lg">9,50€</td>
            </tr>
          </tbody>
        </table>

        <table className="text-sm w-full md:w-screen max-w-md text-left  text-gray-400">
          <thead className="text-xs  uppercase  bg-blue-600 text-white">
            <tr>
              <th scope="col" className="md:px-4 md:py-3 py-2 rounded-tl-lg">
                Einzelflaschen
              </th>
              <th scope="col" className="md:px-4 md:py-3 rounded-tr-lg">
                0,7l
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Nr.3(Hausgemacht)
              </th>
              <td className="md:px-4 md:py-2">20,00€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white"
              >
                Apfelkorn(Hausgemacht)
              </th>
              <td className="md:px-4 md:py-2">20,00€</td>
            </tr>
            <tr className=" border-b bg-zinc-800 border-gray-700">
              <th
                scope="row"
                className="md:px-4 md:py-2 font-medium  whitespace-nowrap text-white rounded-bl-lg"
              >
                Berliner Luft
              </th>
              <td className="md:px-4 md:py-2 rounded-br-lg">25,00€</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Essen;
