import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Offers from "../components/Offers";
import Contact from "../components/Contact";
import Demo from "../components/Demo";

const Home: NextPage = () => {
  return (
    <div className="snap max-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Head>
        <title>Truulo - innowacyjne wizualizacje</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="main">
        <Navbar />
        <Hero />
        <AboutUs />
        <Offers />
        <Demo />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
