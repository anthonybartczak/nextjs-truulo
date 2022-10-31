import NextSectionArrow from "./NextSectionArrow";

export default function Hero() {
  return (
    <section className="relative flex h-screen snap-start flex-row overflow-hidden bg-gradient-to-b from-brandNavy-500 via-brandNavy-300 to-brandNavy-100">
      <div className="hero-section">
        <div className="relative h-screen w-0 bg-opacity-10 md:w-1/2" />
        <div className="hero-section-cta-text">
          <span className="hero-text">_Twoja inwestycja w nowym wymiarze.</span>
          <div className="px-2 pt-8 text-left text-xl font-light text-gray-50">
            <p>
              Jak nikt inny kreatywnie postrzegamy proces powstawania inwestycji
              i dbamy by był atrakcyjny dla Twojego klienta.
            </p>
            <br />
            <p>Sprawdź naszą ofertę i zobacz co możemy dla Ciebie zrobić.</p>
          </div>
          {/* <div>
            <Link href="#o-nas" passHref>
              <a className="hero-cta">Wchodzę w to!</a>
            </Link>
          </div> */}
        </div>
      </div>
      <div className="absolute h-screen w-1/2 bg-brandNavy-500 bg-opacity-50 md:bg-transparent" />
      <div className="hero-section-vid-m md:hero-section-vid-d md:bg-transparent">
        <video className="hero-video-element" autoPlay loop muted playsInline>
          <source src="truulo_reel_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className="hero-section-bg-m md:hero-section-bg-d"></div> */}
      <NextSectionArrow />
    </section>
  );
}
