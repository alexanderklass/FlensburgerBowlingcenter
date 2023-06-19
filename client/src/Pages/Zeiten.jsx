const Zeiten = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch mx-2 gap-2 mt-10 md:mb-5">
        <table className="max-w-md w-full text-sm text-center md:text-left text-gray-400">
          <thead className="text-xs  uppercase bg-blue-600 text-white">
            <tr>
              <th scope="col" className="p-3 md:px-6 md:py-3 rounded-tl-lg">
                Öffnungszeiten
              </th>
              <th scope="col" className="">
                Uhrzeit
              </th>
              <th scope="col" className="md:px-6 md:py-3 rounded-tr-lg">
                Events
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-zinc-800">
              <th
                scope="row"
                className="md:px-6 md:py-2 font-medium whitespace-nowrap text-white"
              >
                Dienstag
              </th>
              <td className="md:px-6 md:py-2">18:00 - 21:00</td>
              <td className="md:px-6 md:py-2">Betriebssportliga</td>
            </tr>
            <tr className="bg-zinc-800">
              <th
                scope="row"
                className="md:px-6 md:py-2 font-medium whitespace-nowrap text-white"
              >
                Mittwoch
              </th>
              <td className="md:px-6 md:py-2">16:00 - 22:00</td>
              <td className="md:px-6 md:py-2"></td>
            </tr>
            <tr className="bg-zinc-800">
              <th
                scope="row"
                className="md:px-6 md:py-2 font-medium whitespace-nowrap text-white"
              >
                Donnerstag
              </th>
              <td className="md:px-6 md:py-2">16:00 - 22:00</td>
              <td className="md:px-6 md:py-2"></td>
            </tr>
            <tr className="bg-zinc-800">
              <th
                scope="row"
                className="md:px-6 md:py-2 font-medium whitespace-nowrap text-white"
              >
                Freitag
              </th>
              <td className="md:px-6 md:py-2">16:00 - Open End</td>
              <td className="md:px-6 md:py-2">
                18:00-21:00 Freizeitliga <br />
                Ab 21:00 Uhr Discobowling
              </td>
            </tr>
            <tr className="bg-zinc-800">
              <th
                scope="row"
                className="md:px-6 md:py-2 font-medium whitespace-nowrap text-white"
              >
                Samstag
              </th>
              <td className="md:px-6 md:py-2">16:00 - Open End</td>
              <td className="md:px-6 md:py-2">Ab 20:00 Uhr Discobowling</td>
            </tr>
            <tr className="bg-zinc-800">
              <th
                scope="row"
                className="rounded-bl-lg md:px-6 md:py-2 font-medium whitespace-nowrap text-white"
              >
                Sonntag
              </th>
              <td className="md:px-6 md:py-2">16:00 - 20:00</td>
              <td className="md:px-6 md:py-2 rounded-br-lg"></td>
            </tr>
          </tbody>
        </table>

        <table className="mb-5 md:m-0 max-w-md w-full text-sm text-center md:text-left  text-gray-400">
          <thead className="text-xs  uppercase bg-blue-600 text-white">
            <tr>
              <th scope="col" className="py-3 md:px-6 md:py-3 rounded-tl-lg">
                Preise
              </th>
              <th scope="col" className="md:px-6 md:py-3">
                Uhrzeit
              </th>
              <th scope="col" className="p-3 md:px-6 md:py-3 rounded-tr-lg">
                Bahn/Stunde
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="p-1 md:px-6 md:py-4 font-medium whitespace-nowrap text-white"
              >
                Dienstag - Donnerstag
              </th>
              <td className="md:px-6 md:py-4">16:00 - 21:00</td>
              <td className="md:px-6 md:py-4">26,-€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="p-1 md:px-6 md:py-4 font-medium whitespace-nowrap text-white"
              >
                Freitags
              </th>
              <td className="md:px-6 md:py-4">ab 21:00 Discobowling</td>
              <td className="md:px-6 md:py-4">30,-€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="p-1 md:px-6 md:py-4 font-medium whitespace-nowrap text-white"
              >
                Samstags
              </th>
              <td className="md:px-6 md:py-4">16:00-20:00</td>
              <td className="md:px-6 md:py-4">26,-€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="p-1 md:px-6 md:py-4 font-medium whitespace-nowrap text-white"
              >
                Samstags
              </th>
              <td className="md:px-6 md:py-4">ab 20:00 Discobowling</td>
              <td className="md:px-6 md:py-4">30,-€</td>
            </tr>
            <tr className=" bg-zinc-800">
              <th
                scope="row"
                className="rounded-bl-lg p-1 md:px-6 md:py-4 font-medium whitespace-nowrap text-white"
              >
                Sonntags
              </th>
              <td className="md:px-6 md:py-4">16:00-22:00</td>
              <td className="md:px-6 md:py-4 rounded-br-lg">26,-€</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:items-stretch justify-center items-center mb-5 mx-2">
        <div className="self-center w-full md:w-screen max-w-md md:max-w-4xl p-4 border border-gray-200 rounded-lg shadow text-white bg-zinc-800 border-gray-700">
          <p>
            Schuhe inklusive ! Tauschen Sie bei uns ihr Parkticket aus dem
            Parkhaus Rote Straße für 2,-€, egal wie lange sie bleiben !
            Buchungen sind nur telefonisch möglich Leider können wir nur
            Stornierungen bis 5 Tage vor dem Termin kostenlos entgegen nehmen.
            Spätere Stornierungen müssen wir berechnen. Vielen Dank für Euer
            Verständnis
          </p>
          <p className="text-blue-500">
            SONDERZEITEN AUF ANFRAGE, ZB. SCHULKLASSEN, BUNDESWEHR,
            BETRIEBSAUSFLÜGE ETC.
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Zeiten;
