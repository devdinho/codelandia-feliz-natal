import "./style.css";
import NavSanta from "../NavSanta";

const NavBar = () => {
  return (
    <nav>
      <NavSanta />
      <span>Feliz Natal</span>
      <span>Início</span>
      <span>Acessórios</span>
      <span>Doação</span>
      <span>Contato</span>
    </nav>
  )
};

export default NavBar;