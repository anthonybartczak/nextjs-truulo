import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-screen snap-start flex-col overflow-hidden md:flex-row">
      <div className="video-section-vid">
        <video className="video-element" autoPlay loop muted playsInline>
          <source
            // src="https://res.cloudinary.com/dxoib26g8/video/upload/v1666679191/truulo_reel_m2mawr.mp4"
            src="truulo_reel_hero.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-section-text bg-gray-50">
        <h1>Truulo.</h1>
        <h1>Twoja inwestycja w nowoczesnej odsłonie.</h1>
      </div>
    </section>
  );
}
