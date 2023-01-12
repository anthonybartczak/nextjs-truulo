import { Dialog, Disclosure } from "@headlessui/react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "O NAS", href: "#o-nas", current: false },
  { name: "OFERTA", href: "#oferta", current: false },
  { name: "DEMO", href: "#demo", current: false },
  { name: "SPRAWDŹ CO ZYSKASZ", href: "#realizacje", current: false },
  { name: "KONTAKT", href: "#kontakt", current: false },
];

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  const openNav = async () => {
    await path02Controls.start(path02Variants.moving);
    path01Controls.start(path01Variants.open);
    path02Controls.start(path02Variants.open);
    setIsOpen(true);
  };

  const closeNav = async () => {
    path01Controls.start(path01Variants.closed);
    await path02Controls.start(path02Variants.moving);
    path02Controls.start(path02Variants.closed);
    setIsOpen(false);
  };

  return (
    <Disclosure as="nav" className="absolute z-50 w-full snap-start">
      <>
        <div className="relative">
          <div className="relative flex h-14 items-center justify-between md:h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button
                onClick={() => (isOpen ? closeNav() : openNav())}
                className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-brandNavy-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandNavy-300"
              >
                <span className="sr-only">Open main menu</span>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <motion.path
                    {...path01Variants.closed}
                    animate={path01Controls}
                    transition={{ duration: 0.2 }}
                    stroke="#FFFFFF"
                  />
                  <motion.path
                    {...path02Variants.closed}
                    animate={path02Controls}
                    transition={{ duration: 0.2 }}
                    stroke="#FFFFFF"
                  />
                </svg>
              </Disclosure.Button>
            </div>
            {/* Desktop version of the navbar */}
            <div className="mx-auto flex h-full flex-1 items-center justify-end bg-gradient-to-b from-brandNavy-500 px-4 sm:items-stretch sm:px-6 md:justify-between lg:px-12">
              <motion.div
                initial={{ x: 500, opacity: 0.7 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-shrink-0 items-center"
              >
                <Link href="#home" passHref>
                  <a>
                    <Image
                      width={132}
                      height={42}
                      className="hidden h-8 w-auto lg:block"
                      src="/truulo_logo_white.webp"
                      alt="Truulo Logo"
                    />
                  </a>
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0.2 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="hidden sm:ml-6 sm:block"
              >
                <ul className="flex gap-2">
                  <li className="nav-link">
                    <Link href="#o-nas">_o nas</Link>
                  </li>
                  <li className="nav-link">
                    <Link href="#oferta">_oferta</Link>
                  </li>
                  <li className="nav-link">
                    <Link href="#demo">_demo</Link>
                  </li>
                  <li className="nav-link">
                    <Link href="#realizacje">_sprawdź co zyskasz</Link>
                  </li>
                  <li className="nav-link">
                    <Link href="#kontakt">_kontakt</Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <Dialog
              open={isOpen}
              static
              as={motion.div}
              initial={{ x: -300, opacity: 0.7 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0.35 }}
              transition={{ duration: 1 }}
              onClose={closeNav}
              className="fixed inset-0 z-30 overflow-y-auto md:hidden"
            >
              <div className="flex h-screen w-3/4">
                <Dialog.Overlay className="fixed inset-0 z-40" />
                <div
                  className={`z-50 flex w-full max-w-sm flex-col justify-center
                         overflow-hidden bg-brandNavy-300 p-4 text-left
                         align-middle shadow-xl`}
                >
                  <div>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href} passHref>
                        <button
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "text-brandNavy-100"
                              : "text-xl text-gray-50 hover:bg-brandNavy-100 hover:text-white",
                            "block px-3 py-3 text-base font-medium transition-all duration-150 ease-linear hover:scale-110"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog>
          )}
        </AnimatePresence>
      </>
    </Disclosure>
  );
}
