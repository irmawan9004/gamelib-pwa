import Link from "next/link";
import Image from "next/image";
import controller from "../public/assets/controller.webp";

export default function Footer() {
  return (
    <footer class=" bg-gray-900 text-gray-600 body-font ">
      <div class="container px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image alt="icon" src={controller} width="50" height="50" />
            <h1 class="text-white ml-3 text-xl font-extrabold">GAMELIB</h1>
          </a>
          <p class="mt-2 text-sm text-slate-200">Be Number One Gamers</p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4"></div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4"></div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4"></div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4"></div>
        </div>
      </div>
      <div class="bg-gray-900">
        <div class="container mx-auto py-4 px-5 flex flex-wrap justify-center flex-col sm:flex-row">
          <p class="text-slate-200 text-sm text-center sm:text-left">
            All right reserved © 2022 —
            <a
              href="https://instagram.com/irmawan_008"
              rel="noopener noreferrer"
              class="text-slate-200 ml-1"
              target="_blank"
            >
              M.Irmawan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
