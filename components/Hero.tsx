import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden font-bold">
      {/* <div className="relative z-30 mx-12 flex flex-col items-center justify-center bg-gray-50 bg-opacity-80 p-12 text-center text-4xl md:text-4xl xl:text-6xl">
        <span className="p-1 text-black">Wizualizacje</span>
        <span className="hero-text-gradient">dla Twojej firmy.</span>
        <div>
          <Link href="" passHref>
            <a className="hero-cta">Wchodzę w to!</a>
          </Link>
        </div>
      </div> */}
      <video className="video-section" autoPlay loop muted playsInline>
        <source
          src="https://res.cloudinary.com/dxoib26g8/video/upload/v1666679191/truulo_reel_m2mawr.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
