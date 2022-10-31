import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "_o nas", href: "#o-nas", current: false },
  { name: "_oferta", href: "#oferta", current: false },
  { name: "_realizacje", href: "#realizacje", current: false },
  { name: "_kontakt", href: "#kontakt", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="absolute z-50 w-full snap-start">
      {({ open }: any) => (
        <>
          <div className="relative">
            <div className="relative flex h-14 items-center justify-between md:h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-brandNavy-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandNavy-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              {/* Desktop version of the navbar */}
              <div className="mx-auto flex h-full flex-1 items-center justify-end bg-gradient-to-b from-brandNavy-500 px-4 sm:items-stretch sm:px-6 md:justify-between lg:px-8">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/" passHref>
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
                </div>
                <div className="hidden sm:ml-6 sm:block">
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
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="mx-2 rounded-b-md bg-brandNavy-300 transition-all duration-150 ease-linear sm:hidden">
            <div className="space-y-1 px-2 py-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-brandNavy-100"
                      : "text-gray-50 hover:bg-brandNavy-100 hover:text-white",
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
