import Image from "next/image";
import { useState } from "react";
import DemoModal from "./DemoModal";

export default function Demo() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <section
      id="demo"
      className="relative flex h-screen snap-start flex-row justify-center overflow-hidden bg-gradient-to-b from-brandNavy-100 via-brandNavy-300 to-brandNavy-500"
    >
      <div className="absolute z-10 h-screen w-screen bg-brandNavy-500 bg-opacity-80" />
      <div className="-z-1">
        <Image
          src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          layout="fill"
          alt="Demo frame"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="relative z-20 my-auto flex flex-col justify-center gap-3 rounded-md bg-brandNavy-300 p-8 shadow-xl md:p-24">
        <h2 className="text-3xl text-gray-50">Zobacz nasze demo</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="rounded-md bg-brandDarkBlue-100 bg-opacity-20 p-1 uppercase text-gray-50 transition ease-linear hover:scale-105"
        >
          <span className="flex justify-center gap-1">
            Oglądaj
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
          </span>
        </button>
      </div>
      <DemoModal toggle={modalOpen} action={openModal} />
    </section>
  );
}
