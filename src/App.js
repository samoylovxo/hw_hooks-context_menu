import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { PageHome } from "./pages/Home";
import { PageDrift } from "./pages/Drift";
import { PageTimeAttack } from "./pages/TimeAttack";
import { PageForza } from "./pages/Forza";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Menu />

        <div className="page">
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/drift" element={<PageDrift />} />
            <Route path="/timeattack" element={<PageTimeAttack />} />
            <Route path="/forza" element={<PageForza />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
};

export { App };
