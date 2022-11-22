import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import placeholder from "../public/assets/placeholder.webp";

export default function ItemCard(props) {
  const [imageError, setImageError] = useState(false);

  return (
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <Link
        href={{
          pathname: "/detail",
          query: {
            data: JSON.stringify(props),
          },
        }}
      >
        <div class="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            class="object-cover object-center h-full w-full"
            width="1203"
            height="503"
            src={imageError ? placeholder : props.data.thumbnail}
            onError={() => setImageError(true)}
          />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-white hover:text-violet-700">
          {props.data.title}
        </h2>
        <p class="text-base leading-relaxed mt-2 text-slate-200">
          {props.data.short_description}
        </p>
      </Link>
    </div>
  );
}
