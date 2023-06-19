import { Routes, Route } from "react-router-dom";
import PageLayout from "./Components/PageLayout.jsx";
import Start from "./Pages/Start.jsx";
import Zeiten from "./Pages/Zeiten.jsx";
import Essen from "./Pages/Essen.jsx";
import Veranstaltungen from "./Pages/Veranstaltungen.jsx";
import Events from "./Pages/Events.jsx";
import Betriebssport from "./Pages/Betriebssport.jsx";
import Datenschutz from "./Pages/Datenschutz.jsx";
import Login from "./Pages/Login.jsx";
import SidebarLayout from "./Components/SidebarLayout.jsx";
import Arbeitszeiten from "./Pages/Arbeitszeiten.jsx";
import Bahnen from "./Pages/Bahnen.jsx";
import Portal from "./Pages/Portal.jsx";
function App() {
  return (
    <main className="flex h-screen flex-col">
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Start />} />
          <Route path="/Öffnungszeiten & Preise" element={<Zeiten />} />
          <Route path="/Gastronomie" element={<Essen />} />
          <Route path="/Veranstaltungen" element={<Veranstaltungen />} />
          <Route path="/Events 2023" element={<Events />} />
          <Route path="/Betriebssport" element={<Betriebssport />} />
          <Route path="/Datenschutz" element={<Datenschutz />} />
        </Route>
        <Route element={<SidebarLayout />}>
          <Route path="/Portal" element={<Portal />}>
            <Route path="Bahnen" element={<Bahnen />} />
            <Route path="Arbeitszeiten" element={<Arbeitszeiten />} />
          </Route>
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
