"use client";
import Link from "next/link";
import classes from "./NavigationHeader.module.css";
import { usePathname } from "next/navigation";
const NavigationHeader = () => {
  const path = usePathname();
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link
            href="/meals"
            className={path.startsWith("/meals") ? classes.active : ""}
          >
            Browse Meals
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className={path.startsWith("/community") ? classes.active : ""}
          >
            Fooding Community
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationHeader;
