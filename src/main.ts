import { setupDarkModeToggle } from "./dark-mode";
import { setupDictionary } from "./dictionary";
import { setupTheme } from "./theme";

import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="mx-auto max-w-[51rem] px-10 py-14 max-md:p-5">
  <header class="flex">
    <a href="#">
      <img src="/wordbook.svg" alt="logo" class="w-8 h-10" />
    </a>
    <div class="grow"></div>
    <div class="flex gap-5 items-center">
      <select
        id="font-select"
        class="capitalize font-semibold px-1 bg-transparent placeholder-red-500 dark:bg-black"
      >
        <option value="sans-serif">sans</option>
        <option value="serif">serif</option>
        <option value="monospace">mono</option>
      </select>
      <div class="border-l h-8"></div>
      <label class="relative inline-flex items-center cursor-pointer">
        <input id="mode" type="checkbox" class="sr-only peer" />
        <div
          class="w-11 h-6 bg-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600 scale-95 mr-4"
        ></div>
        <img
          class="w-6 h-6 peer-checked:hidden"
          src="/moon.svg"
          alt="moon icon"
          loading="lazy"
        />
        <img
          class="w-6 h-6 hidden peer-checked:inline-block invert"
          src="/sun.svg"
          alt="sun icon"
          loading="lazy"
        />
      </label>
    </div>
  </header>
  <form class="flex mt-12 rounded-xl max-md:mt-5 bg-gray-100 dark:bg-zinc-800">
    <label class="w-full p-3">
      <input
        type="search"
        name="search"
        class="block py-2 px-3 w-full z-20 font-semibold bg-transparent max-md:py-0.5 placeholder:text-gray-600 dark:placeholder:text-gray-400"
        placeholder="Search for a word..."
        required
      />
    </label>
    <button type="submit" class="py-5 px-6 max-md:py-0.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 text-purple-500"
      >
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="sr-only">Search</span>
    </button>
  </form>
  <main></main>
</div>
`;

setupDarkModeToggle(document.querySelector("#mode")!);
setupTheme(document.querySelector("#font-select")!);
setupDictionary(document.querySelector("main")!);
