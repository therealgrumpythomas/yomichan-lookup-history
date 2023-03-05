import { atom } from "jotai";
import { DateQueryValue, dateQueryValueWeek, HistoryItem, HistoryItemSource } from "../models/models";
import { filterLookups } from "./filter";

export interface QueryParams {
  source: HistoryItemSource | null,
  text: string,
  date: DateQueryValue,
  deleted: string[],
  rangeStepSize: number,
  range: [number, number]
}
export const selectedItemAtom = atom<HistoryItem | null>(null);
export const queryParamsAtom = atom<QueryParams>({
  source: null,
  text: '',
  date: dateQueryValueWeek,
  deleted: [],
  rangeStepSize: 30,
  range: [0, 30]
});

export const lookupsAtom = atom<{ lookups: HistoryItem[], sources: HistoryItemSource[] } | null>(null);
export const filteredItemAtom = atom((get) => {
  const result = get(lookupsAtom);
  const params = get(queryParamsAtom);
  if (!result) {
    return null;
  }

  const { lookups, total } = filterLookups(result.lookups,
    {
      dateQuery: params.date,
      sourceQuery: params.source ? params.source.label : null,
      textQuery: params.text,
      deleted: params.deleted,
      range: params.range
    });
  return { lookups, sources: result.sources, totalLookups: total };
});
