import Link from "next/link";
import classes from "./MainHeader.module.css";
import logoImg from "@/public/images/logo.png";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={logoImg.src} alt="A Plate with Food" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Fooding Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
