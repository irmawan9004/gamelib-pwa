import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className=" bg-gray-900 sticky bottom-0 z-50 body-font">
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center ">
        <Link href="/" class="mr-5 hover:text-violet-700 text-slate-200">
          Home
        </Link>
        <Link href="/review" class="mr-5 hover:text-violet-700 text-slate-200">
          Gamelist
        </Link>
        <Link href="/tools" class="mr-5 hover:text-violet-700 text-slate-200">
          Game Platform
        </Link>
        <Link href="/aboutus" class="mr-5 hover:text-violet-700 text-slate-200">
          About
        </Link>
      </nav>
    </section>
  );
}
