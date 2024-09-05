"use client";

import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    router.push(`/search/web?searchTerm=${input}`);
  };
  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await res.json();
    const result = data[0];

    if (!res) {
      return;
    }
    router.push(`/search/web/?searchTerm=${result}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200   px-5 py-3 rounded-full hover:shadow-md transition-shadow 
        focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow focus:outline-none"
          value={input}
        />
        <BsFillMicFill className="text-xl text-gray-500" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row justify-center mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          onClick={randomSearch}
          className="capitalize btn flex items-center justify-center disabled:opacity-80
        "
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? (
            <Spinner color="primary" />
          ) : (
            "Im felling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
