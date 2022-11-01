import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isBrowser = typeof window !== "undefined";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      firstName,
      lastName,
      emailAddress,
      messageContent,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmailAddress("");
        setMessageContent("");
        setIsOpen(true);
      }
    });
  };

  return (
    <section id="kontakt" className="contact-section">
      <div className="mt-12 flex items-center justify-center px-6 py-6 md:mt-0">
        <form
          id="contact-form"
          className="bg-gray-50 p-6 opacity-100 shadow-2xl shadow-brandIndigo-300 md:p-8"
        >
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-1 block text-xs uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Imię
              </label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstName}
                className="mr-3 w-full
                        appearance-none border-b border-gray-800 bg-transparent p-4 leading-tight text-gray-700 focus:bg-gray-200
                        focus:outline-none"
                type="text"
                placeholder="John"
                aria-label="Full name"
              />
              <p className="mb-5 text-xs italic text-red-500"></p>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="mb-1 block text-xs uppercase tracking-wide text-gray-700"
                htmlFor="grid-last-name"
              >
                Nazwisko
              </label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastName}
                className="mr-3 w-full
                        appearance-none border-b border-gray-800 bg-transparent p-4 leading-tight text-gray-700 focus:bg-gray-200
                        focus:outline-none"
                type="text"
                placeholder="Doe"
                aria-label="Full name"
              />
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="my-5 mb-1 block text-xs uppercase tracking-wide text-gray-700"
                htmlFor="grid-email-address"
              >
                Adres email
              </label>
              <input
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
                value={emailAddress}
                className="mr-3
                        w-full appearance-none border-b border-gray-800 bg-transparent p-4 leading-tight text-gray-700
                        focus:bg-gray-200 focus:outline-none"
                type="email"
                placeholder="example@exp.com"
                aria-label="Full name"
              />
            </div>
          </div>
          <div className="-mx-3 mb-1 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="my-5 mb-1 block text-xs uppercase tracking-wide text-gray-700"
                htmlFor="grid-message-content"
              >
                Wiadomość
              </label>
              <textarea
                onChange={(e) => {
                  setMessageContent(e.target.value);
                }}
                value={messageContent}
                rows={6}
                className="mr-3 w-full appearance-none border-b border-gray-800 bg-transparent p-4 leading-tight text-gray-700 focus:bg-gray-200 focus:outline-none"
                placeholder="Twoja wiadomość."
                aria-label="Full name"
              ></textarea>
            </div>
            <div className="flex w-full justify-between px-3">
              <div className="md:flex md:items-center"></div>
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                id="contact-submit"
                className="focus:shadow-outline my-2 bg-brandNavy-500 py-1.5 px-5
                text-white shadow transition ease-linear hover:bg-brandNavy-100 focus:outline-none"
                type="submit"
              >
                Wyślij
              </button>
            </div>
          </div>
        </form>
        <Dialog
          className="relative z-50 flex"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true"></div>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-gray-50 p-6 shadow-xl">
              <Dialog.Title className="py-2">
                ✉️ Wiadomość wysłana!
              </Dialog.Title>
              <Dialog.Description>
                <p>Dziękujemy za kontakt. Odezwiemy się jak najszybciej!</p>
                <div className="flex pt-3 text-sm">
                  <p className="">Zespół Truul</p>
                  <p className="text-brandLightPurple-500">o</p>
                </div>
              </Dialog.Description>
              <button
                className="relative mt-4 justify-items-end rounded bg-emerald-600 py-1 px-2 text-sm text-gray-50 transition ease-linear hover:bg-emerald-500"
                onClick={() => setIsOpen(false)}
              >
                Okay ✔️
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  );
}
