import React from 'react';
import { DateQueryValue, HistoryItemSource } from './models/models';

interface Props {
    activeSource: HistoryItemSource | null,
    activeDateQueryValue: DateQueryValue,
    dateQueryValues: DateQueryValue[],
    sources: HistoryItemSource[],
    textQuery: string,
    onChange: (activeSource: HistoryItemSource | null, activeDateQueryValue: DateQueryValue, text: string) => void
}

export function OverviewFilters({ activeSource, sources, dateQueryValues, activeDateQueryValue, onChange, textQuery }: Props) {
    const onChangeSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.currentTarget;
        const source = sources.find(s => s.label === value);
        onChange(source || null, activeDateQueryValue, textQuery);
    }

    const onChangeDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.currentTarget;
        const date = dateQueryValues.find(v => v.value === value);
        onChange(activeSource, date!, textQuery);
    }

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        onChange(activeSource, activeDateQueryValue, value);
    }

    return (
        <>
            <div className='custom-grid'>
                <input className='col-8' defaultValue={textQuery} type="search" id="search" name="search" placeholder='Search' onChange={onChangeText} />
                <select className='col-4' onChange={onChangeDate} defaultValue={activeDateQueryValue.value}>
                    {
                        dateQueryValues.map(value => <option key={value.value} value={value.value}>{value.label}</option>)
                    }
                </select>
            </div>
            <details>
                <summary>More filter options</summary>
                <label htmlFor="source">Source</label>
                <select id="source" onChange={onChangeSource} defaultValue={activeSource ? activeSource.label : ''}>
                    <option value="">All sources</option>
                    {sources.map(source => <option key={source.label} value={source.label}>{source.label}</option>)}
                </select>
            </details>
        </>
    );
}
