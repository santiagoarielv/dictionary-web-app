import { setupDarkModeToggle } from "./dark-mode";
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
      <select id="font-select" class="capitalize font-semibold px-1 bg-transparent placeholder-red-500 dark:bg-black">
        <option value="sans-serif">sans</option>
        <option value="serif">serif</option>
        <option value="monospace">mono</option>
      </select>
      <div class="border-l h-8"></div>
      <label class="relative inline-flex items-center cursor-pointer">
        <input id="mode" type="checkbox" class="sr-only peer" />
        <div class="w-11 h-6 bg-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600 scale-95 mr-4"></div>
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
      class="block py-2 px-3 w-full z-20 font-semibold bg-transparent max-md:py-3.5 placeholder:text-gray-600 dark:placeholder:text-gray-400"
      placeholder="Search for a word..."
      required
      />
    </label>
    <button type="submit" class="py-5 px-6 max-md:py-3.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 text-purple-600"
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
  <section class="flex items-center mt-12 flex-wrap max-md:mt-5">
    <div class="grow">
      <h1 class="leading-tight text-[4rem] font-serif tracking-wider max-md:text-[2rem]">
        keyboard
      </h1>
      <h2 class="text-2xl tracking-tighter max-md:text-xl text-purple-600">/ˈkiːbɔːrd/</h2>
    </div>
    <div>
      <button class="p-7 rounded-full max-md:p-3.5 bg-purple-600/20 text-purple-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </button>
    </div>
  </section>
  <div class="inline-flex items-center w-full relative">
    <hr class="w-full my-12 max-md:my-10" />
    <span class="absolute px-3 font-medium bg-white left-0 dark:bg-black"> noun </span>
  </div>
  <section>
    <h3 class="text-xl leading-loose font-normal max-md:text-lg text-zinc-500">
      Meaning
    </h3>
    <ul class="my-4 ml-10 list-disc space-y-1 text-[19px] marker:text-base max-md:ml-5 max-md:text-base max-md:my-3 max-md:space-y-3 marker:text-purple-600">
      <li class="pl-2">
        (etc.) A set of keys used to operate a typewriter, computer etc.
      </li>
      <li class="pl-2">
        A component of many instruments including the piano, organ, and
        harpsichord consisting of usually black and white keys that cause
        different tones to be produced when struck.
      </li>
      <li class="pl-2">
        A device with keys of a musical keyboard, used to control electronic
        sound-producing devices which may be built into or separate from the
        keyboard device.
      </li>
    </ul>
  </section>
  <section class="mt-12 flex flex-wrap max-lg:mt-5">
    <h3 class="text-xl leading-loose font-normal max-md:text-lg text-zinc-500">
      Synonyms
    </h3>
    <ul class="font-semibold mt-2 ml-2 text-xl tracking-wide max-md:text-base text-purple-600">
      <li class="pl-2 max-lg:pl-5 max-md:pl-4">electronic keyboard</li>
    </ul>
  </section>
  <div class="inline-flex items-center w-full relative">
    <hr class="w-full my-12 max-md:my-10" />
    <span class="absolute px-3 font-medium bg-white left-0 dark:bg-black"> verb </span>
  </div>
  <section>
    <h3 class="text-xl leading-loose font-normal max-md:text-base text-zinc-500">
      Meaning
    </h3>
    <ul class="my-4 ml-10 list-disc space-y-1 text-[19px] marker:text-base max-md:ml-5 max-md:text-base max-md:my-3 max-md:space-y-3 marker:text-purple-600">
      <li class="pl-2">
        <p>To type on a computer keyboard.</p>
        <q class="md:text-lg text-zinc-500">
          Keyboarding is the part of this job that I hate the most.
        </q>
      </li>
    </ul>
  </section>
  <hr class="w-full mt-12 mb-3" />
  <section class="flex text-base gap-1.5 flex-wrap">
    <p class="text-zinc-500">Source</p>
    <ul class="overflow-hidden">
      <li>
        <a
          class="hover:underline flex w-full items-center"
          target="_blank"
          href="https://en.wiktionary.org/wiki/keyboard"
        >
          <span class="truncate">
            https://en.wiktionary.org/wiki/keyboard
          </span>
          <span class="inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </a>
      </li>
    </ul>
  </section>
</div>
`;

setupDarkModeToggle(document.querySelector("#mode")!);
setupTheme(document.querySelector("#font-select")!);
