import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section
      id="o-nas"
      className="flex h-screen snap-start flex-col bg-brandLightPink-100 text-justify md:flex-row"
    >
      <div className="about-us-image order-last" />
      <div className="h-1/2 px-2 pt-4 md:h-screen md:w-1/2 md:px-12">
        <h1 className="text-2xl">O nas</h1>
        <p className="pt-4 text-justify	">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          illo possimus inventore accusamus! Eius vitae sed, quaerat magni
          voluptatum quisquam reiciendis dolorem dignissimos similique ad
          sapiente ipsam neque consequatur eos. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Recusandae illo possimus inventore
          accusamus!
        </p>
      </div>
    </section>
  );
}
