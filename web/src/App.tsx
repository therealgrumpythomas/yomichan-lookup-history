import React, { useEffect } from 'react';
import './App.css';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { getHistoryItemsFromExtension } from './store/hydration';
import { LookupOverview } from './lookup-overview';
import { OverviewFilters } from './overview-filters';
import LookupDetails from './lookup-details';
import { filteredItemAtom, lookupsAtom, queryParamsAtom, selectedItemAtom } from './store/atom';
import { dateQueryValues } from './models/models';

function App() {
  const items = useAtomValue(filteredItemAtom);
  const setLookups = useSetAtom(lookupsAtom);
  const [selectedItem, setSelectedItem] = useAtom(selectedItemAtom);
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

  if (selectedItem) {
    return (
      <div className='container'>
        <LookupDetails
          selectedItem={selectedItem}
          onDelete={(item) => {
            if (confirm(`Delete all entries with the text ${item.text}?`)) {
              window.postMessage(`deleteYomichanHistoryItem:${item.text}`);
              setQueryParams({...queryParams, deleted: [...queryParams.deleted, item.text]});
              setSelectedItem(null);
          }
          }}
          goBack={() => {
            setSelectedItem(null);
          }} />
      </div>);
  }

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
              text: newText,
              deleted: []
            });
          }} />

        <details>
          <summary>Actions</summary>
          <div><button className='secondary'>Optimize data</button></div>
          <div>
            <button className='secondary'>Clear all data</button>
          </div>
        </details>

        <LookupOverview lookups={lookups} onClick={(item) => {
          setSelectedItem(item)
        }} />
      </div >
    </main >
  );
}

export default App;
