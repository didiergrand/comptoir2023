import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useRouter } from "next/router";

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <Navbar />
        </div>
      )}
    </>
  );
}

export default MobileNav;
