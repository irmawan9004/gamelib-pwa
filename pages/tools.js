import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Image from "next/image";
import pic1 from "../public/assets/rapidapilogo.png";
import pic2 from "../public/assets/logoikan.png";
import pic3 from "../public/assets/tailwindlogo.png";
import pic4 from "../public/assets/githublogo.png";
import pic5 from "../public/assets/tailblock2.png";
import pic6 from "../public/assets/wikipedialogo.png";

export default function Tools() {
  return (
    <div>
      <Meta title="Web Development Tools" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Web Development Tools
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
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
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={pic1} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3">
                  Rapid API
                </h2>
                <p class="leading-relaxed text-base">
                  The worlds largest API hub, is used by over three million
                  developers to find, test, and connect to thousands of APIs —
                  all with a single API key and dashboard
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-white bg-none w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={pic2} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3">
                  Freshwater API
                </h2>
                <p class="leading-relaxed text-base">
                  List of freshwater aquarium fish species API Documentation by
                  pdewouters
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={pic3} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="bg-white text-gray-900 text-lg text-center title-font font-medium mb-3">
                  Tailwind
                </h2>
                <p class="leading-relaxed text-base">
                  Wrestling with a bunch of complex media queries in your CSS
                  sucks, so Tailwind lets you build responsive designs right in
                  your HTML instead. Throw a screen size in front of literally
                  any utility class and watch it magically apply at a specific
                  breakpoint
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={pic4} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3">
                  Github
                </h2>
                <p class="leading-relaxed text-base">
                  A code hosting platform for version control and collaboration.
                  It lets you and others work together on projects from
                  anywhere. This tutorial teaches you GitHub essentials like
                  repositories, branches, commits, and pull requests
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image alt="icon" src={pic5} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3">
                  Tailblocks
                </h2>
                <p class="leading-relaxed text-base">
                  Tailblocks is a Next js app to provide best web design
                  components for free. It uses React, NextJs, Tailwind CSS and
                  deployed on Digital Ocean
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 bg-none flex-shrink-0">
                <Image alt="icon" src={pic6} className="rounded-full" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3">
                  Wikipedia
                </h2>
                <p class="leading-relaxed text-base">
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
      <Footer />
    </div>
  );
}
