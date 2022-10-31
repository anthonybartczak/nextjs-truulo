export default function AboutUs() {
  return (
    <section
      id="o-nas"
      className="relative flex h-screen snap-start flex-col overflow-hidden md:flex-row "
    >
      <div className="section-video-parent">
        <video className="section-video-child" autoPlay loop muted playsInline>
          <source src="truulo_reel_about_us.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="section-text md:order-first">
        <h1 className="text-2xl">_o nas</h1>
        <p className="pt-2 text-justify	">
          Truulo powstlo na bazie wieloletnich doświadczeń w branży filmowej
          oraz reklamowej. Realizowaliśmy reklamy dla taich firm jak Profit
        </p>
      </div>
    </section>
  );
}
