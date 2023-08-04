import type { Definition, Meaning, Word } from "./type";

export const setupDictionary = (element: HTMLElement) => {
  let words: Word[] = localStorage.words ? JSON.parse(localStorage.words) : [];
  const audio = new Audio();
  const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";

  const form = document.querySelector("form")!;
  const button = document.querySelector<HTMLButtonElement>(
    "button[type=submit]"
  )!;

  const fetchWords = async (value: string) => {
    const response = await fetch(`${BASE_URL}${value}`);
    if (response.ok) {
      const data = await response.json();
      words = data;
      localStorage.words = JSON.stringify(words);
      render();
    }
  };

  const speakWord = (word?: Word) => {
    const mp3_url = word?.phonetics.find((phonetic) =>
      phonetic.audio.includes(".mp3")
    );
    if (mp3_url) {
      audio.src = mp3_url.audio;
      audio.play();
    }
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const value = formData.get("search") as string;
    button.disabled = true;
    await fetchWords(value);
    button.disabled = false;
  });

  const renderWord = (word: Word) => {
    return `
      ${header(word.word, word.phonetic)}
      ${word.meanings.map(mearnings).join("")}
      <hr class="w-full mt-12 mb-3" />
      <section class="flex text-base gap-1.5 flex-wrap">
        <p class="text-zinc-500">Source</p>
        <ul class="overflow-hidden">
        ${word.sourceUrls.map(source)}
        </ul>
      </section>
`;
  };

  const render = () => {
    element.innerHTML = `
      ${words.map(renderWord).join("")}
    `;
    element.querySelectorAll("button").forEach((button, index) => {
      button.addEventListener("click", () => {
        speakWord(words[index]);
      });
    });
  };
  const definition = ({ definition, example, synonyms }: Definition) => {
    return `
    <li class="pl-2">
      <p>${definition}</p>
      ${example ? `<q class="md:text-lg text-zinc-500">${example}</q>` : ""}
      ${synonyms ? `<p>${synonyms.join(", ")}</p>` : ""}
    </li>
  `;
  };

  const source = (url: string) => {
    return `
    <li>
      <a
        class="hover:underline flex w-full items-center"
        target="_blank"
        href="${url}"
      >
        <span class="truncate"> ${url} </span>
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
  `;
  };

  const synonyms = (synonyms: string[]) => {
    return synonyms.length > 0
      ? `
    <section class="mt-12 flex flex-wrap max-lg:mt-5">
      <h3 class="text-xl leading-loose font-normal max-md:text-lg text-zinc-500">
        Synonyms
      </h3>
      <ul class="flex flex-wrap font-semibold mt-2 ml-2 text-xl tracking-wide max-md:text-base text-purple-600">
        ${synonyms
          .map(
            (synonym) =>
              `<li class="pl-2 max-lg:pl-5 max-md:pl-4">${synonym}</li>`
          )
          .join(", ")}
      </ul>
    </section>
  `
      : "";
  };

  const mearnings = (meaning: Meaning) => {
    return `
    <div class="inline-flex items-center w-full relative">
      <hr class="w-full my-12 max-md:my-10" />
      <span class="absolute px-3 font-medium bg-white left-0 dark:bg-black">
        ${meaning.partOfSpeech}
      </span>
    </div>
    <section>
      <h3 class="text-xl leading-loose font-normal max-md:text-lg text-zinc-500">
        Meaning
      </h3>
      <ul class="my-4 ml-10 list-disc space-y-1 text-[19px] marker:text-base max-md:ml-5 max-md:text-base max-md:my-3 max-md:space-y-3 marker:text-purple-600">
        ${meaning.definitions.map(definition).join("")}
      </ul>
    </section>
    ${synonyms(meaning.synonyms)}
  `;
  };

  const header = (word: string, phonetic: string) => {
    return `
    <section class="flex items-center mt-12 flex-wrap max-md:mt-5">
      <div class="grow">
        <h1 class="leading-tight text-[4rem] font-serif tracking-wider max-md:text-[2rem]">
          ${word}
        </h1>
        <h2 class="text-2xl tracking-tighter max-md:text-xl text-purple-600">
          ${phonetic}
        </h2>
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
  `;
  };
  render();
};
