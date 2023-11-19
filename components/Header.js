import Link from "next/link";
import Image from "next/image";
import controller from "../public/assets/controller.webp";

export default function Header() {
  return (
    <header class="text-gray-600 body-font bg-gray-900">
      <div class="container mx-auto flex justify-between flex-wrap p-5 flex-col md:flex-row items-center">
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
        <Link href="/login">
          <button class="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}
