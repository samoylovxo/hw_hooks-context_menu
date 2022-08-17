import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        className={({ isActive }) =>
          `menu__item ${isActive ? "menu__item-active" : ""}`
        }
        to="/"
      >
        Главная
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `menu__item ${isActive ? "menu__item-active" : ""}`
        }
        to="/drift"
      >
        Дрифт-такси
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `menu__item ${isActive ? "menu__item-active" : ""}`
        }
        to="/timeattack"
      >
        Time Attack
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `menu__item ${isActive ? "menu__item-active" : ""}`
        }
        to="/forza"
      >
        Forza Karting
      </NavLink>
    </div>
  );
};

export { Menu };
