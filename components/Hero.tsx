import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-screen snap-start flex-row overflow-hidden bg-gray-50">
      <div className="hero-section-cta">
        <div className="relative h-screen w-0 md:w-1/2"></div>
        <div className="relative flex w-full flex-col items-center justify-center place-self-center bg-gray-50 bg-opacity-70 p-5 md:w-1/2">
          <span className="text-black">Twoja inwestycja</span>
          <span className="hero-text-gradient">w nowoczesnej odsłonie.</span>
          <div>
            <Link href="" passHref>
              <a className="hero-cta">Wchodzę w to!</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-section-vid-m md:hero-section-vid-d bg-gray-50 md:bg-transparent">
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
