import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="realizacje"
      className="section-height relative flex snap-start flex-col overflow-hidden md:flex-row"
    >
      <div className="video-section-vid order-last">
        <video className="video-element" autoPlay loop muted playsInline>
          <source
            // src="https://res.cloudinary.com/dxoib26g8/video/upload/v1666679191/truulo_reel_m2mawr.mp4"
            src="truulo_reel_projects.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-section-text bg-gray-50">
        <h1 className="text-2xl">Oferta</h1>
        <p className="pt-4 text-justify	">
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
