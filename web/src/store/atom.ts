import { atom } from "jotai";
import { DateQueryValue, dateQueryValueWeek, HistoryItem, HistoryItemSource } from "../models/models";
import { filterLookups } from "./filter";

export const selectedItemAtom = atom<HistoryItem | null>(null);
export const queryParamsAtom = atom<{
  source: HistoryItemSource | null,
  text: string,
  date: DateQueryValue,
  deleted: string[]
}>({
  source: null,
  text: '',
  date: dateQueryValueWeek,
  deleted: []
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
      textQuery: params.text,
      deleted: params.deleted
    });
  return { lookups, sources: result.sources };
});
