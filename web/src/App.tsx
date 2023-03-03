import React, { useEffect } from 'react';
import './App.css';
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { getHistoryItemsFromExtension } from './store/hydration';
import { LookupOverview } from './lookup-overview';
import { OverviewFilters } from './overview-filters';
import { HistoryItem, HistoryItemSource } from './models/hydration-item';
import { filterLookups } from './store/filter';
import { DateQueryValue, dateQueryValues, dateQueryValueWeek } from './models/date-query-values';

const queryParamsAtom = atom<{
  source: HistoryItemSource | null,
  text: string,
  date: DateQueryValue
}>({
  source: null,
  text: '',
  date: dateQueryValueWeek
});

const lookupsAtom = atom<{ lookups: HistoryItem[], sources: HistoryItemSource[] } | null>(null);
const filteredItemAtom = atom((get) => {
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

function App() {
  const items = useAtomValue(filteredItemAtom);
  const setLookups = useSetAtom(lookupsAtom);
  const [queryParams, setQueryParams] = useAtom(queryParamsAtom);
  useEffect(() => {
    getHistoryItemsFromExtension().then((response) => {
      setLookups(response);
    });
  }, [setLookups]);

  if (items === null) {
    return <></>;
  }

  const { lookups, sources } = items;
  return (
    <main className='container'>
      <div className='header'>
        <OverviewFilters
          activeSource={queryParams.source}
          activeDateQueryValue={queryParams.date}
          sources={sources}
          dateQueryValues={dateQueryValues}
          textQuery={queryParams.text}
          onChange={(newActiveSource, newDate, newText) => {
            setQueryParams({
              source: newActiveSource,
              date: newDate,
              text: newText
            });
          }} />

        <details>
          <summary>Actions</summary>
          <div><button className='secondary'>Optimize data</button></div>
          <div>
            <button className='secondary'>Clear all data</button>
          </div>
        </details>

        <LookupOverview lookups={lookups} />
      </div >
    </main >
  );
}

export default App;
