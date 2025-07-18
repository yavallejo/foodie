import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";
import classes from "./MainHeader.module.css";
const Logo = () => {
  return (
    <Link href="/" className={classes.logo}>
      <Image src={logoImg} alt="A Plate with Food" priority />
      NextLevel Food
    </Link>
  );
};

export default Logo;
