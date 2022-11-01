export default function AboutUs() {
  return (
    <section
      id="o-nas"
      className="relative flex h-screen snap-start flex-col overflow-hidden bg-gradient-to-b from-brandNavy-100 via-brandNavy-300 to-brandNavy-500 md:flex-row"
    >
      <div className="section-video-parent">
        <video className="section-video-child" autoPlay loop muted playsInline>
          <source src="truulo_reel_about_us.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="section-text md:order-first">
        <h1 className="text-2xl font-semibold">_o nas</h1>
        <p className="section-paragraph">
          Truulo powstlo na bazie wieloletnich doświadczeń w branży filmowej
          oraz reklamowej. Realizowaliśmy reklamy dla taich firm jak Profit
          Development czy Skanska. Kreatywnie postrzegamy proces powstawania
          oraz prezentacji inwestycji tak by w jak najbardziej efektowny i
          przejrzysty sposób zaprezentować ją Państwa odbiorcom.
        </p>
      </div>
    </section>
  );
}
