import React from 'react';
import { HistoryItem } from './models/models';

type OnClick = (item: HistoryItem) => void;

export function LookupOverview({ lookups, onClick }: { lookups: HistoryItem[], onClick: OnClick }) {
    return (
        <>
            <div className="card-grid">
                {lookups.map(lookup => <LookupOverviewItem key={lookup.text} lookup={lookup} onClick={onClick} />)}
            </div>
        </>
    )
}

function LookupOverviewItem({ lookup, onClick }: { lookup: HistoryItem, onClick: OnClick }) {
    const sentence = lookup.sentences.values().next().value;
    return (
        <div className="card-grid-item" onClick={() => {
            onClick(lookup)
        }}>
            <div className="card-grid-item-contents">
                <div>
                    <div>
                        {lookup.text}
                    </div>
                </div>
                <p className='muted'>{sentence}</p>
            </div>
            <div>
                <sup className='sup muted'>{lookup.amount}</sup>
            </div>
        </div>
    );
}