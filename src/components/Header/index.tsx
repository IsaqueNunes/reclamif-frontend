import { Link, Outlet } from "react-router-dom";

import Logo from "../../assets/reclamif_logo.svg";

import styles from './header.module.css'
import { Button } from "../Button";
import { AuthProvider } from "../../utils/useAuth";

const navItens = [
  { to: "/", label: "Home" },
  { to: "/new-issue", label: "Nova Reclamação" },
  { to: "/issues", label: "Lista de Reclamações" },
  { to: "/about", label: "Sobre" },
];

export function Header() {
  return (
    <AuthProvider>
      <header id={styles.header}>
        <Link to="/" id={styles["site-title"]}>
          <img src={Logo} alt="Reclamif Logo" />
          <h1>ReclamIF</h1>
        </Link>
        <nav>
          <ul id={styles["header-menus"]}>
            {navItens.map((item) => (
              <li key={item.to} className={styles["header-option"]}>
                <Link to={item.to}>
                  <Button variation="link">
                    {item.label}
                  </Button>
                </Link>
              </li>
            ))}
            <li className={styles["header-option"]}>
              <Link to="/login">
                <Button variation="solid">
                  Login
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </ AuthProvider>
  );
}
