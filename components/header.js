import Navbar from "./navbar";
import MobileNav from "./mobileNav";
import Image from "next/image";
import logo from "../public/LogoComptoir.png";
import { HeartIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        <Image src={logo} alt="Comptoir de la Veveyse" />
      </a>
      <div className="desktopNav">
        <Navbar />
      </div>
      <button className="btn transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 inline-flex">
        <HeartIcon className="w-6 h-6" aria-hidden="true" />
        Entrée gratuite
      </button>
      <div className="mobileNav">
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
