export type Phonetic = {
  text: string;
  audio: string;
};

export type Definition = {
  antonyms: string[];
  definition: string;
  synonyms: string[];
  example?: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  antonyms: string[];
  synonyms: string[];
};

export type Word = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string[];
};
