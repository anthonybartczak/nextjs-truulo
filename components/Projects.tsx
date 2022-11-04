import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="realizacje"
      className="flex h-screen snap-start flex-col overflow-hidden bg-gradient-to-b from-brandNavy-100 via-brandNavy-300 to-brandNavy-500 md:flex-row"
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
        <h1 className="text-3xl font-semibold md:text-3xl">_realizacje</h1>
        <p className="section-paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          illo possimus inventore accusamus! Eius vitae sed, quaerat magni
          voluptatum quisquam reiciendis dolorem dignissimos similique ad
          sapiente ipsam neque consequatur eos. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Recusandae illo possimus inventore
          accusamus!
        </p>
      </motion.div>
    </section>
  );
}
