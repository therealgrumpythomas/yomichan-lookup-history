import React from 'react';
import { HistoryItem } from './models/models';
import * as DomPurify from 'dompurify';

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
    const sentences = lookup.sentences.values();
    let i = 0;
    let sentence;
    while (!sentence && i < lookup.sentences.size) {
        let value = sentences.next().value;
        if (value && value !== lookup.text) {
            sentence = value;
        }

        i++;
    }
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
                <p className='muted' dangerouslySetInnerHTML={{__html: DomPurify.sanitize(sentence)}}></p>
            </div>
            <div>
                <sup className='sup muted'>{lookup.amount}</sup>
            </div>
        </div>
    );
}