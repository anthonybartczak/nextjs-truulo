import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section
      id="o-nas"
      className="flex h-screen snap-start flex-col bg-brandLightPink-100 text-justify  md:flex-row"
    >
      {/* <div className="relative h-1/2 md:h-screen md:w-1/2">
        <Image
          alt="City image"
          layout="fill"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        />
      </div> */}
      <div className="about-us-image relative h-1/2 md:h-screen md:w-1/2" />
      <div className="h-1/2 px-2 pt-20 md:order-first md:h-screen md:w-1/2 md:px-12 xl:pt-20">
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
