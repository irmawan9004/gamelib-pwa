import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
};

export default function List() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  });

  return (
    <section class="text-gray-600 body-font bg-gray-900">
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {data === null ? (
            <p class="mx-auto text-center font-bold">Loading...</p>
          ) : (
            data.map((item, index) => <ItemCard key={index} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
