import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import Navbar from "./navbar";

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <button onClick={handleMenuClick} className="mobileNav-btn">
        {isMenuOpen && (
          <XMarkIcon className="w-6 h-6" aria-hidden="true" />
        )}
        {!isMenuOpen && (
          <Bars3Icon className="w-6 h-6" aria-hidden="true" />
        )}
      </button>
      {isMenuOpen && (
        <div className="mobileNav-panel">
          <Navbar handleSubmenuClick={handleSubmenuClick} />
        </div>
      )}
    </>
  );
}

export default MobileNav;
