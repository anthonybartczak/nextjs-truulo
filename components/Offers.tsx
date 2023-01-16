import Link from "next/link";
import { motion } from "framer-motion";

export default function Offers() {
  return (
    <section
      id="oferta"
      className="flex h-screen snap-start flex-col overflow-hidden bg-gradient-to-t from-brandNavy-500 via-brandNavy-300 to-brandNavy-100 md:flex-row md:bg-gradient-to-b"
    >
      <div className="section-video-parent md:order-first">
        <video className="section-video-child" autoPlay loop muted playsInline>
          <source src="truulo_reel_offers.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5, type: "linear" }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="section-text"
      >
        <h1 className="text-3xl font-semibold md:text-3xl">_oferta</h1>
        <p className="section-paragraph md:!text-xl">
          Poznaj naszą ofertę lub napisz do nas jak możemy Ci pomóc.
        </p>
        <Link href="" passHref>
          <button className="mt-4 rounded-md bg-brandDarkBlue-300 bg-opacity-20 py-1 px-2 shadow-md transition ease-linear hover:scale-105">
            <span className="text-lg">Pobierz nasz cennik</span>
          </button>
        </Link>
        <Link href="#demo" passHref>
          <button className="mt-4 rounded-md bg-brandDarkBlue-300 bg-opacity-20 py-1 px-2 shadow-md transition ease-linear hover:scale-105">
            <span className="text-lg">Zobacz nasze demo</span>
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
