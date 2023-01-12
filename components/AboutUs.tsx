import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="o-nas"
      className="relative flex h-screen snap-start flex-col overflow-hidden bg-gradient-to-b from-brandNavy-100 via-brandNavy-300 to-brandNavy-500 md:flex-row"
    >
      <div className="section-video-parent">
        <video className="section-video-child" autoPlay loop muted playsInline>
          <source src="truulo_reel_about_us.mp4" type="video/mp4" />
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
        className="section-text md:order-first"
      >
        <h1 className="text-4xl font-semibold md:text-3xl">_o nas</h1>
        <p className="section-paragraph md:text-xl">
          W Trullo specjalizujemy się w przygotowaniu spotów wideo
          przeznaczonych do marketingu i promocji dla klientów z rynku
          nieruchomości. Doświadczony zespół pozwala w kreatywny sposób tworzyć
          materiały wideo dopasowane do potrzeb naszych klientów. Realizowaliśmy
          reklamy dla takich firm jak Profit Development czy Skanska.
        </p>
      </motion.div>
    </section>
  );
}
