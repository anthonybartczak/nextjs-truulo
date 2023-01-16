import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

export default function DemoModal(props: any) {
  const modalState = props.toggle;
  const action = props.action;

  return (
    <>
      <Transition appear show={modalState} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={action}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 mx-2 flex justify-center">
            <div className="flex w-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex h-1/2 w-full transform flex-col overflow-hidden rounded-xl bg-brandNavy-300 p-3 text-left align-middle shadow-xl transition-all md:w-1/2 md:p-3">
                  <div className="hidden md:block">
                    <button
                      type="button"
                      className="mb-2 inline-flex justify-center rounded-md border border-transparent bg-brandNavy-100 p-2 text-sm font-medium text-gray-50"
                      onClick={action}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <iframe
                    className="h-full"
                    src="https://www.youtube.com/embed/XdYAsN2-0LQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
