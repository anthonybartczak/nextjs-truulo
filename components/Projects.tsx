import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="realizacje"
      className="flex h-screen snap-start flex-col overflow-hidden bg-gradient-to-b from-brandNavy-500 via-brandNavy-300 to-brandNavy-100 md:flex-row"
    >
      <div className="section-video-parent">
        <video className="section-video-child" autoPlay loop muted playsInline>
          <source src="truulo_reel_projects.mp4" type="video/mp4" />
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
        <h1 className="text-3xl font-semibold md:text-3xl">
          _sprawdź co zyskasz
        </h1>
        <ol className="section-paragraph list-inside list-decimal !text-left xs:!text-sm md:!text-2xl">
          <li className="hover-underline-animation py-2">
            Pomożemy Ci wybrać odpowiedni format wideo do promocji twojej
            inwestycji.
          </li>
          <li className="hover-underline-animation py-2">
            Stworzymy wysokiej jakości spoty wideo.
          </li>
          <li className="hover-underline-animation py-2">
            Przygotujemy je różnych formatach w zależności od miejsca ich
            prezentacji.
          </li>
          <li className="hover-underline-animation py-2">
            Doradzimy Ci w wyborze strategii marketingowej dla Twojego wideo.
          </li>
        </ol>
      </motion.div>
    </section>
  );
}
