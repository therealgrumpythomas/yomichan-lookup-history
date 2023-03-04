import DOMPurify from "dompurify";
import { atom } from "jotai";
import { DateQueryValue, dateQueryValueWeek, Example, ExampleSentence, HistoryItem, HistoryItemSource } from "../models/models";
import { filterLookups } from "./filter";

export const selectedItemAtom = atom<HistoryItem | null>(null);
export const queryParamsAtom = atom<{
  source: HistoryItemSource | null,
  text: string,
  date: DateQueryValue
}>({
  source: null,
  text: '',
  date: dateQueryValueWeek
});

export const lookupsAtom = atom<{ lookups: HistoryItem[], sources: HistoryItemSource[] } | null>(null);
export const filteredItemAtom = atom((get) => {
  const result = get(lookupsAtom);
  const params = get(queryParamsAtom);
  if (!result) {
    return null;
  }

  const lookups = filterLookups(result.lookups,
    {
      dateQuery: params.date,
      sourceQuery: params.source ? params.source.label : null,
      textQuery: params.text
    });
  return { lookups, sources: result.sources };
});

export const examplesAtom = atom<Example>({
    text: '',
    sentences: [],
    state: 'loading'
});

export const fetchExamplesAtom = atom(
    null,
    async (_get, set, text: string) => {
        set(examplesAtom, {
            state: 'loading',
            text,
            sentences: []
        });

        const response = await fetch(`https://massif.la/ja/search?q=${text}&fmt=json`);
        const body = await response.json();
        set(examplesAtom, {
            state: 'hasData',
            text: text,
            sentences: body.results.slice(0, 11).reduce((acc: ExampleSentence[], result: any) => {
                acc.push({
                    source: {
                        title: result.sample_source.title,
                        url: result.sample_source.url
                    },
                    text: result.text,
                    markup: DOMPurify.sanitize(result.highlighted_html)
                });
                return acc;
            }, [])
        });
    }
)