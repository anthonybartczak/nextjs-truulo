import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "O nas", href: "#o-nas", current: false },
  { name: "Oferta", href: "#oferta", current: false },
  { name: "Realizacje", href: "#realizacje", current: false },
  { name: "Kontakt", href: "#kontakt", current: false },
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
                <Disclosure.Button className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-brandDarkPurple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandDarkPurple-500">
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
              <div className="mx-auto flex flex-1 items-center justify-end px-4 sm:items-stretch sm:px-6 md:justify-between lg:px-8">
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
                    <li
                      className={
                        router.asPath == "/#o-nas"
                          ? "nav-link-active"
                          : "nav-link"
                      }
                    >
                      <Link href="#o-nas">O nas</Link>
                    </li>
                    <li
                      className={
                        router.asPath == "/#oferta"
                          ? "nav-link-active"
                          : "nav-link"
                      }
                    >
                      <Link href="#oferta">Oferta</Link>
                    </li>
                    <li
                      className={
                        router.asPath == "/#realizacje"
                          ? "nav-link-active"
                          : "nav-link"
                      }
                    >
                      <Link href="#realizacje">Realizacje</Link>
                    </li>
                    <li
                      className={
                        router.asPath == "/#kontakt"
                          ? "nav-link-active"
                          : "nav-link"
                      }
                    >
                      <Link href="#kontakt">Kontakt</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="bg-gray-50 sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-brandDarkPurple-500"
                      : "text-black hover:bg-brandDarkPurple-500 hover:text-white",
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
