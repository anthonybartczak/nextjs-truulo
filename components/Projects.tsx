import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="realizacje"
      className="flex h-screen snap-start flex-col bg-brandIndigo-100 text-justify md:flex-row"
    >
      <div className="projects-image relative order-first h-1/2 md:h-screen md:w-1/2" />
      <div className="h-1/2 px-2 pt-4 md:h-screen md:w-1/2 md:px-12">
        <h1 className="text-2xl">Realizacje</h1>
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
