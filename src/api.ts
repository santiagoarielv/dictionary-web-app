import type { Word } from "./type";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const getWord = async (word: string) => {
  const response = await fetch(`${API_URL}${word}`);
  if (!response.ok) {
    return [];
  }
  const data: Word[] = await response.json();
  return data;
};
