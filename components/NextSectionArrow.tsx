import Link from "next/link";

export default function NextSectionArrow() {
  return (
    <Link href="#o-nas" passHref>
      <a className="relative flex justify-center">
        <div className="bounce2 absolute bottom-4 mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-brandNavy-500 shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 w-7 text-gray-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </a>
    </Link>
  );
}
