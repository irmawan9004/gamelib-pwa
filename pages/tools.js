import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Image from "next/image";
import steam from "../public/assets/steam.png";
import epic from "../public/assets/epicgames.png";
import riot from "../public/assets/riot.png";
import origin from "../public/assets/origin.png";
import rockstar from "../public/assets/rockstar.png";
import battlenet from "../public/assets/batlenett.png";
import Navbar from "../components/Navbar";

export default function Tools() {
  return (
    <div>
      <Meta title="Game Digital Platform Tools" />
      <Header />
      <section class="text-gray-600 body-font bg-gray-900">
        <div class="container px-5 py-5 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 text-white">
              Game Digital Platform
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s text-slate-200">
              Website builders and integrated development environments in that
              they do not assist in the direct creation of a webpage, rather
              they are tools used for testing the user interface of a website or
              web application
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-900 text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={steam} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 text-white">
                  Steam
                </h2>
                <p class="leading-relaxed text-base text-slate-200">
                  The worlds largest API hub, is used by over three million
                  developers to find, test, and connect to thousands of APIs —
                  all with a single API key and dashboard
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-900 text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={epic} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 text-white">
                  Epic Games
                </h2>
                <p class="leading-relaxed text-base text-slate-200">
                  List of freshwater aquarium fish species API Documentation by
                  pdewouters
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-gray-900 w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={riot} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 text-white">
                  Riot Games
                </h2>
                <p class="leading-relaxed text-base text-slate-200">
                  Wrestling with a bunch of complex media queries in your CSS
                  sucks, so Tailwind lets you build responsive designs right in
                  your HTML instead. Throw a screen size in front of literally
                  any utility class and watch it magically apply at a specific
                  breakpoint
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class=" w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-900 text-indigo-500 mb-5 flex-shrink-0 ">
                <Image alt="icon" src={battlenet} className="rounded-full " />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 text-white">
                  Battle.net
                </h2>
                <p class="leading-relaxed text-base text-slate-200">
                  A code hosting platform for version control and collaboration.
                  It lets you and others work together on projects from
                  anywhere. This tutorial teaches you GitHub essentials like
                  repositories, branches, commits, and pull requests
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-gray-900 w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={origin} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 text-white">
                  Origin
                </h2>
                <p class="leading-relaxed text-base text-slate-200">
                  Tailblocks is a Next js app to provide best web design
                  components for free. It uses React, NextJs, Tailwind CSS and
                  deployed on Digital Ocean
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-gray-900 w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={rockstar} className="rounded-full " />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 text-white">
                  Rockstar
                </h2>
                <p class="leading-relaxed text-base text-slate-200">
                  Wikipedia adalah proyek ensiklopedia daring multibahasa yang
                  bebas dan terbuka, yang dijalankan oleh Yayasan Wikimedia,
                  organisasi nirlaba yang berbasis di Florida, Amerika Serikat.
                  Nama Wikipedia berasal dari gabungan kata wiki dan
                  ensiklopedia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Navbar />
      <Footer />
    </div>
  );
}
