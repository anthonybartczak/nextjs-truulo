import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Projects from "../components/Offers";
import Offers from "../components/Projects";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        id="main"
        className="snap max-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      >
        <Navbar />
        <Hero />
        <AboutUs />
        <Offers />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
