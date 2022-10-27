export default function AboutUs() {
  return (
    <section className="section-height relative flex snap-start flex-col overflow-hidden md:flex-row">
      <div className="video-section-vid">
        <video className="video-element" autoPlay loop muted playsInline>
          <source
            // src="https://res.cloudinary.com/dxoib26g8/video/upload/v1666679191/truulo_reel_m2mawr.mp4"
            src="truulo_reel_about_us.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-section-text bg-gray-50 md:order-first">
        <h1 className="text-2xl">O nas</h1>
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
