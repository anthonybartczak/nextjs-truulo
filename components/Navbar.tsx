import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "O nas", href: "#o-nas", current: true },
  { name: "Oferta", href: "#oferta", current: false },
  { name: "Realizacje", href: "#realizacje", current: false },
  { name: "Kontakt", href: "#kontakt", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-gray-50">
      {({ open }: any) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch md:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/" passHref>
                    <a>
                      <Image
                        width={132}
                        height={35}
                        className="hidden h-8 w-auto lg:block"
                        src="/truulo_logo.webp"
                        alt="Truulo Logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex gap-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "border-brandDarkPurple-500 text-brandDarkPurple-500"
                            : "text-gray-400 hover:border-brandLightPurple-500 hover:text-brandLightPurple-500",
                          "duration-150; border-b-2 px-3 py-2 text-xl transition-all ease-linear"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-brandDarkPurple-500"
                      : "text-gray-300 hover:bg-brandDarkPurple-500 hover:text-white",
                    "block px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
