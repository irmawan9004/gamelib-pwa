import Link from "next/link";
import Image from "next/image";
import controller from "../public/assets/controller.webp";

export default function Header() {
  return (
    <header class="text-gray-600 body-font bg-gray-900">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image alt="icon" src={controller} width="50" height="50" />
          <div class="text-left">
            <span class="ml-3 text-xl text-white font-extrabold">GAMELIB</span>
            <p class="ml-3  text-sm text-slate-200">Be Number One Gamers</p>
          </div>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" class="mr-5 hover:text-violet-700 text-slate-200">
            Home
          </Link>
          <Link
            href="/review"
            class="mr-5 hover:text-violet-700 text-slate-200"
          >
            Gamelist
          </Link>
          <Link href="/tools" class="mr-5 hover:text-violet-700 text-slate-200">
            Review
          </Link>
          <Link
            href="/aboutus"
            class="mr-5 hover:text-violet-700 text-slate-200"
          >
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
