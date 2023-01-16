import { Popover, Transition } from "@headlessui/react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact(this: any) {
  let [isOpen, setIsOpen] = useState(true);

  function handleCopy() {
    navigator.clipboard.writeText("k.chmielewskimail@gmail.com");
    setIsOpen(true);
  }

  return (
    <>
      <section id="kontakt" className="contact-section">
        <div className="mt-8 flex items-center justify-center px-3 py-6 md:mt-0">
          <div className="mx-auto text-gray-50">
            <div className="flex flex-col gap-y-4 text-xl md:text-3xl">
              <p className="font-semibold">_opiekun klienta</p>
              <div className="mt-2 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-2 h-7 w-7 md:h-10 md:w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p>Krzysztof Chmielewski</p>
              </div>
              <div className="flex flex-row">
                {/* <button onClick={() => handleCopy()}>
                  k.chmielewskimail@gmail.com
                </button> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-2 h-7 w-7 md:h-10 md:w-10"
                >
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                <div>
                  <Popover>
                    <CopyToClipboard text="k.chmielewskimail@gmail.com">
                      <Popover.Button onClick={() => handleCopy()}>
                        k.chmielewskimail@gmail.com
                      </Popover.Button>
                    </CopyToClipboard>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Popover.Panel>
                        <span className="text-sm">
                          Adres e-mail skopiowany!
                        </span>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
