import { Dialog, Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "O NAS", href: "#o-nas", current: false },
  { name: "OFERTA", href: "#oferta", current: false },
  { name: "REALIZACJE", href: "#realizacje", current: false },
  { name: "KONTAKT", href: "#kontakt", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <Disclosure as="nav" className="absolute z-50 w-full snap-start">
      <>
        <div className="relative">
          <div className="relative flex h-14 items-center justify-between md:h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-brandNavy-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandNavy-300">
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon
                    className="block h-6 w-6 text-white"
                    aria-hidden="true"
                    onClick={() => setIsOpen(false)}
                  />
                ) : (
                  <Bars3Icon
                    className="block h-6 w-6 text-white"
                    aria-hidden="true"
                    onClick={() => setIsOpen(true)}
                  />
                )}
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
                    <Link href="#realizacje">_realizacje</Link>
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
              exit={{ x: -300, opacity: 0.7 }}
              transition={{ duration: 1 }}
              onClose={() => setIsOpen(false)}
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
