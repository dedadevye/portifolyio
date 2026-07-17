import { NavLink } from "react-router-dom";
import MagnetizeButton from "../components/MagnetizeButton";


function Header() {
  return (
    <header className="cabecalho">
      <nav className="cabecalho_menu">
        <NavLink className="cabecalho_menu_link" to="/">
          Início
        </NavLink>

        <NavLink className="cabecalho_menu_link" to="/about">
          Minha trajetória
        </NavLink>

        <NavLink className="cabecalho_menu_link" to="/contact">
          Contato
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
