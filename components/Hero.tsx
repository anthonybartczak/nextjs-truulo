import NextSectionArrow from "./NextSectionArrow";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen snap-start flex-row overflow-hidden bg-gradient-to-b from-brandNavy-500 via-brandNavy-300 to-brandNavy-100"
    >
      <div className="hero-section">
        <div className="relative h-screen w-0 bg-opacity-10 md:w-1/2" />
        <div className="relative flex w-full flex-col justify-center p-6 md:w-1/2 md:p-12">
          <span className="text-left text-2xl font-semibold text-gray-50 md:text-3xl">
            _Twoja inwestycja w nowym wymiarze.
          </span>
          <div className="pt-6 text-justify text-xl text-gray-50">
            <p>
              Jak nikt inny kreatywnie postrzegamy proces powstawania inwestycji
              i dbamy by był atrakcyjny dla Twojego klienta.
            </p>
            <br />
            <p>Sprawdź naszą ofertę i zobacz co możemy dla Ciebie zrobić.</p>
          </div>
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
