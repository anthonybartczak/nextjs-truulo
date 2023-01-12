import NextSectionArrow from "./NextSectionArrow";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen snap-start flex-row overflow-hidden bg-gradient-to-b from-brandNavy-500 via-brandNavy-300 to-brandNavy-100"
    >
      <div className="hero-section">
        <div className="relative h-screen w-0 bg-opacity-10 md:w-1/2" />
        <div className="relative flex w-full flex-col justify-center px-6 md:w-1/2 md:p-12">
          <div className="flex flex-col text-left text-3xl font-semibold text-gray-50 md:flex-row md:text-3xl">
            <span>_Twoja inwestycja w nowym wymiarze.</span>
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
            className="pt-6 text-justify text-xl text-gray-50"
          >
            <p>
              W Trullo rozumiemy, że biznes wymaga dziś kreatywnego podejścia do
              komunikacji z klientem. Spot wideo to doskonałe narzędzie
              marketingowe i sprzedażowe. Tworzymy nowoczesne formy filmowe
              wspierające proces sprzedaży nieruchomości.
            </p>
            <br />
            <p>Sprawdź naszą ofertę i zobacz co możemy dla Ciebie zrobić.</p>
          </motion.div>
        </div>
      </div>
      <div className="absolute h-screen w-1/2 bg-brandNavy-500 bg-opacity-50 md:bg-transparent" />
      <div className="hero-section-vid-m md:hero-section-vid-d md:bg-transparent">
        <video className="hero-video-element" autoPlay loop muted playsInline>
          <source src="truulo_reel_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className="hero-section-bg-m md:hero-section-bg-d"></div> */}
      <NextSectionArrow />
    </section>
  );
}
