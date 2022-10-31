import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="realizacje"
      className="flex h-screen snap-start flex-col overflow-hidden md:flex-row"
    >
      <div className="section-video-parent">
        <video className="section-video-child" autoPlay loop muted playsInline>
          <source src="truulo_reel_projects.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="section-text md:order-first">
        <h1 className="text-2xl">_realizacje</h1>
        <p className="pt-2 text-justify	">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          illo possimus inventore accusamus! Eius vitae sed, quaerat magni
          voluptatum quisquam reiciendis dolorem dignissimos similique ad
          sapiente ipsam neque consequatur eos. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Recusandae illo possimus inventore
          accusamus!
        </p>
      </div>
    </section>
  );
}
