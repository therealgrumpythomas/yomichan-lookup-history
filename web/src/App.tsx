import React, { useEffect } from 'react';
import './App.css';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { getHistoryItemsFromExtension } from './store/hydration';
import { LookupOverview } from './lookup-overview';
import { OverviewFilters } from './overview-filters';
import LookupDetails from './lookup-details';
import { filteredItemAtom, lookupsAtom, queryParamsAtom, selectedItemAtom, QueryParams } from './store/atom';
import { dateQueryValues } from './models/models';

declare global {
  interface Window { getLookups?(): any[], importLookups?(data: any): any }
}

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

  const { lookups, sources, totalLookups } = items;

  if (selectedItem) {
    return (
      <LookupDetails
        selectedItem={selectedItem}
        onDelete={(item) => {
          if (confirm(`Delete all entries with the text ${item.text}?`)) {
            window.postMessage(`deleteYomichanHistoryItem:${item.text}`);
            setQueryParams({ ...queryParams, deleted: [...queryParams.deleted, item.text] });
            setSelectedItem(null);
          }
        }}
        onEdit={(item, newText) => {
          window.postMessage(`normalizeYomichanHistory:--${item.text}--++${newText}++`);
          setSelectedItem({
            ...selectedItem,
            text: newText
          });
        }}
        goBack={() => {
          setSelectedItem(null);
        }} />);
  }

  return (
    <div className='header'>
      <OverviewFilters
        activeSource={queryParams.source}
        activeDateQueryValue={queryParams.date}
        sources={sources}
        dateQueryValues={dateQueryValues}
        textQuery={queryParams.text}
        onChange={(newActiveSource, newDate, newText) => {
          setQueryParams({
            ...queryParams,
            source: newActiveSource,
            date: newDate,
            text: newText,
            deleted: [],
            // reset range on any changes
            range: [0, queryParams.rangeStepSize]
          });
        }} />

      <details>
        <summary>Actions</summary>
        <button onClick={e => exportLookups()}>Export</button>
        <label htmlFor="file">File browser
          <input type="file" id="file" name="file" onChange={(e) => {
            if (!e.target.files) {
              return;
            }

            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (readerEvent) => {
              if (!window.getLookups || !readerEvent.target || !readerEvent.target.result) {
                return;
              }

              if (confirm('This action will override all the existing data. Are you sure?')) {
                importLookups(JSON.parse(readerEvent.target.result.toString()));
              }
            }

            reader.readAsText(file);
          }}/>
        </label>
      </details>

      <LookupOverview lookups={lookups} onClick={(item) => {
        setSelectedItem(item)
      }} />
      <div>
        <LoadMore totalLookups={totalLookups} queryParams={queryParams} onLoadMore={() => {
          setQueryParams({
            ...queryParams,
            range: [0, queryParams.range[1] + queryParams.rangeStepSize]
          });
        }} />
      </div>
    </div >
  );
}
interface LoadMoreProps {
  queryParams: QueryParams,
  onLoadMore: Function,
  totalLookups: number
}
const LoadMore = (props: LoadMoreProps) => {
  const shown = Math.max(...props.queryParams.range);
  const leftOverCount = props.totalLookups - shown;
  if (leftOverCount <= 0) {
    return <></>;
  }

  let message = `Load ${props.queryParams.rangeStepSize} more`;
  if (leftOverCount < props.queryParams.rangeStepSize) {
    message = `Load remaining ${leftOverCount}`;
  }

  return (
    <button className='secondary' onClick={() => props.onLoadMore()}>{message}</button>
  );
}

function exportLookups() {
  if (!window.getLookups) {
    return;
  }

  const lookups = window.getLookups();
  const d = new Date();
  const a = document.createElement('a');
  const blob = new Blob([JSON.stringify(lookups)], { type: "octet/stream" });
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.target = '_blank';
  a.download = `lookups-export-${d.getFullYear()}-${d.getMonth()}-${d.getDate()}.json`;
  a.click();
  window.URL.revokeObjectURL(url);
}

function importLookups(data: any) {
  if (window.importLookups) {
    window.importLookups(data);
    window.location.reload();
  }
}

export default App;
