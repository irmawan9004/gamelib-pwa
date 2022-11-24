import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGamepad,
  faUser,
  faDungeon,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <section className="py-4  bg-gray-900 sticky bottom-0 z-50 body-font">
      <nav class="md:ml-auto ml-4 flex flex-wrap items-center text-base justify-center ">
        <Link href="/" class="mr-5">
          <div className="ml-2">
            <FontAwesomeIcon
              icon={faHouse}
              style={{ fontSize: 30, color: "white" }}
            />
          </div>
          <p className="hover:text-violet-700 text-slate-200 font-bold">Home</p>
        </Link>
        <Link href="/gamelist" class="mr-5 ">
          <div className="ml-3">
            <FontAwesomeIcon
              icon={faGamepad}
              style={{ fontSize: 30, color: "white" }}
            />
          </div>
          <p className="hover:text-violet-700 text-slate-200 font-bold">
            Gamelist
          </p>
        </Link>
        <Link href="/platform" class="mr-5 ">
          <div className="ml-10">
            <FontAwesomeIcon
              icon={faDungeon}
              style={{ fontSize: 30, color: "white" }}
            />
          </div>
          <p className="hover:text-violet-700 text-slate-200 font-bold">
            Game Platform
          </p>
        </Link>
        <Link href="/aboutus" class="mr-5">
          <div className="ml-3">
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: 30, color: "white" }}
            />
          </div>
          <p className="hover:text-violet-700 text-slate-200 font-bold">
            About
          </p>
        </Link>
      </nav>
    </section>
  );
}
