import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-screen snap-start flex-row overflow-hidden bg-brandDarkPurple-900">
      <div className="hero-section-cta">
        <div className="relative h-screen w-0 bg-gray-50 bg-opacity-10 md:w-1/2" />
        <div className="hero-section-cta-text">
          <span className="text-4xl font-extrabold text-white">
            Twoja inwestycja
          </span>
          <span className="hero-text-gradient">w nowoczesnej odsłonie.</span>
          <div>
            <Link href="" passHref>
              <a className="hero-cta">Wchodzę w to!</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute h-screen w-1/2 bg-brandDarkPurple-800 bg-opacity-50 md:w-1/2" />
      <div className="hero-section-vid-m md:hero-section-vid-d md:bg-transparent">
        <video className="hero-video-element" autoPlay loop muted playsInline>
          <source
            // src="https://res.cloudinary.com/dxoib26g8/video/upload/v1666679191/truulo_reel_m2mawr.mp4"
            src="truulo_reel_hero.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-section-bg-m md:hero-section-bg-d"></div>
    </section>
  );
}
