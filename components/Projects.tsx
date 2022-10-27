import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="oferta"
      className="section-height relative flex snap-start flex-col overflow-hidden md:flex-row"
    >
      <div className="video-section-text order-last bg-gray-50">
        <h1 className="text-2xl">Realizacje</h1>
        <p className="pt-2 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          illo possimus inventore accusamus! Eius vitae sed, quaerat magni
          voluptatum quisquam reiciendis dolorem dignissimos similique ad
          sapiente ipsam ne que consequatur eos. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Recusandae illo possimus inventore
          accusamus!
        </p>
      </div>
      <div className="video-section-vid">
        <video className="video-element" autoPlay loop muted playsInline>
          <source
            // src="https://res.cloudinary.com/dxoib26g8/video/upload/v1666679191/truulo_reel_m2mawr.mp4"
            src="truulo_reel_offers.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
