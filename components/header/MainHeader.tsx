import classes from "./MainHeader.module.css";

import MainHeaderBackground from "@/components/header/MainHeaderBackground";
import NavigationHeader from "./NavigationHeader";
import Logo from "./Logo";
const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Logo />
        <NavigationHeader />
      </header>
    </>
  );
};

export default MainHeader;
