export default function Offers() {
  return (
    <section
      id="oferta"
      className="flex h-screen snap-start flex-col overflow-hidden md:flex-row"
    >
      <div className="section-video-parent md:order-first">
        <video className="section-video-child" autoPlay loop muted playsInline>
          <source src="truulo_reel_offers.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="section-text bg-gray-50">
        <h1 className="text-2xl">Oferta</h1>
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
