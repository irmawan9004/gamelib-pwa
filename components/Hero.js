import React from "react";
import Image from "next/image";
import warframe from "../public/assets/warframe.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <section class="bg-gray-900 text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-2/3 mx-auto">
            <div class="flex flex-wrap w-full  py-32 px-10 relative mb-4 rounded">
              <Image
                alt="gallery"
                class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="https://www.pcgamesn.com/wp-content/uploads/2019/11/overwatch-2-team.jpg"
                width={1000}
                height={1000}
              />
              <div class="text-center relative z-10 w-full">
                <h2 class="text-2xl text-gray-900 font-medium title-font mb-2 text-white hover:text-violet-700">
                  Games List
                </h2>
                <p class="leading-relaxed text-slate-200">
                  List of interesting games for Real Gamers to play
                </p>
                <Link
                  href="/gamelist"
                  class="mt-3 text-indigo-500 inline-flex items-center "
                >
                  Find More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="flex flex-wrap -mx-2">
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full  sm:py-24 py-16 sm:px-10 px-6 relative rounded">
                  <Image
                    alt="gallery"
                    class="w-full h-full object-center block opacity-25 absolute inset-0"
                    src={warframe}
                    width={1000}
                    height={1000}
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-2 text-white hover:text-violet-700">
                      Platform Games
                    </h2>
                    <p class="leading-relaxed text-slate-200">
                      Digital game provider that can be the choice of true
                      gamers
                    </p>
                    <Link
                      href="/platform"
                      class="mt-3 text-indigo-500 inline-flex items-center"
                    >
                      Find more
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full  sm:py-24 py-16 sm:px-10 px-6 relative rounded">
                  <Image
                    alt="gallery"
                    class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="https://cdn1.dotesports.com/wp-content/uploads/2020/03/31071031/LogoVersion_Beta-Key-Art_VALORANT.jpg"
                    width={80}
                    height={80}
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-2 text-white hover:text-violet-700">
                      About Us
                    </h2>
                    <p class="leading-relaxed text-slate-200">
                      Details from this website and other interesting
                      information about Gamelib
                    </p>
                    <Link
                      href="/aboutus"
                      class="mt-3 text-indigo-500 inline-flex items-center"
                    >
                      Find more
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
