import Link from "next/link";

export default function Offers() {
  return (
    <section
      id="oferta"
      className="flex h-screen snap-start flex-col overflow-hidden bg-gradient-to-t from-brandNavy-500 via-brandNavy-300 to-brandNavy-100 md:flex-row md:bg-gradient-to-b"
    >
      <div className="section-video-parent md:order-first">
        <video className="section-video-child" autoPlay loop muted playsInline>
          <source src="truulo_reel_offers.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="section-text">
        <h1 className="text-2xl font-semibold">_oferta</h1>
        <p className="section-paragraph">
          Profesjonalnie zajmujemy się kompleksową produkcją video z inwestycji,
          organizacją planu filmowego, zaawansowaną animacją i wizualizacją oraz
          postprodukcją obrazu i dźwięku.
        </p>
        <Link href="" passHref>
          <button className="mt-4 bg-brandDarkBlue-100 bg-opacity-20 py-1 px-2 transition ease-linear hover:scale-105">
            <span className="text-lg">Pobierz nasz cennik</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
