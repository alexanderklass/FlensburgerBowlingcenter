import { Routes, Route } from "react-router-dom";
import PageLayout from "./Components/PageLayout.jsx";
import Start from "./Pages/start/index.jsx";
import Zeiten from "./Pages/zeiten/index.jsx";
import Essen from "./Pages/essen/index.jsx";
import Veranstaltungen from "./Pages/veranstaltungen/index.jsx";
import Events from "./Pages/events/index.jsx";
import Betriebssport from "./Pages/betriebssport/index.jsx";
import Datenschutz from "./Pages/datenschutz/index.jsx";
import Login from "./Pages/login/index.jsx";
import Arbeitszeiten from "./Pages/arbeitszeiten/index.jsx";
import Bahnen from "./Pages/bahnen/index.jsx";
import Portal from "./Pages/portal/index.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Start />} />
          <Route path="/Öffnungszeiten & Preise" element={<Zeiten />} />
          <Route path="/Gastronomie" element={<Essen />} />
          <Route path="/Veranstaltungen" element={<Veranstaltungen />} />
          <Route path="/Events 2023" element={<Events />} />
          <Route path="/Betriebssport" element={<Betriebssport />} />
        </Route>
        <Route path="/Datenschutz" element={<Datenschutz />} />
        <Route path="/Portal" element={<Portal />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Bahnen" element={<Bahnen />} />
        <Route path="/Arbeitszeiten" element={<Arbeitszeiten />} />
      </Routes>
    </>
  );
}

export default App;
