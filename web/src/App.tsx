import React, { useEffect } from 'react';
import './App.css';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { getHistoryItemsFromExtension } from './store/hydration';
import { LookupOverview } from './lookup-overview';
import { OverviewFilters } from './overview-filters';
import LookupDetails from './lookup-details';
import { filteredItemAtom, lookupsAtom, queryParamsAtom, selectedItemAtom, QueryParams } from './store/atom';
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

  const { lookups, sources, totalLookups } = items;

  if (selectedItem) {
    return (
      <div className='container'>
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
              ...queryParams,
              source: newActiveSource,
              date: newDate,
              text: newText,
              deleted: [],
              // reset range on any changes
              range: [0, queryParams.rangeStepSize]
            });
          }} />

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
    </main >
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

export default App;
