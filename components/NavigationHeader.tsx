import Link from "next/link";
import classes from "./NavigationHeader.module.css";
const NavigationHeader = () => {
  return (
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
  );
};

export default NavigationHeader;
