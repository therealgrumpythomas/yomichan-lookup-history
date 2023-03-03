import React from 'react';
import { HistoryItem } from "./models/hydration-item";

export function LookupOverview({ lookups }: { lookups: HistoryItem[] }) {
    return (
        <div className="card-grid">
            {lookups.map(lookup => <LookupOverviewItem key={lookup.text} lookup={lookup} />)}
        </div>
    )
}

function LookupOverviewItem({ lookup }: { lookup: HistoryItem }) {
    return (
        <div className="card-grid-item">
            <div className="card-grid-item-contents">
                {lookup.text}:{lookup.amount}
            </div>
        </div>
    );
}