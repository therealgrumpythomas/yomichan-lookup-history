import { HistoryItem, HistoryItemSource } from "../models/models";

interface ReturnType {
    lookups: HistoryItem[],
    sources: HistoryItemSource[]
}

declare global {
    interface Window { hydrate: any; }
}

export async function getHistoryItemsFromExtension() {
    return await new Promise<ReturnType>((resolve, reject) => {
        window.hydrate = (function (data: any) {
            let groupedLookups = data.lookups.reduce((acc: any, lookup: any) => {
                const index = acc.findIndex((l: any) => l.text === lookup.text);
                const source = data.sources[lookup.sourceId] ? data.sources[lookup.sourceId].label : "";
                if (index === -1) {
                    acc.push({
                        text: lookup.text,
                        amount: 1,
                        sources: (source || '').trim().length > 0 ? new Set([source]) : new Set([]),
                        creationDates: [lookup.created]
                    });
                } else {
                    acc[index].amount++;
                    acc[index].sources.add(source);
                    acc[index].creationDates.push(lookup.created);
                }

                return acc;
            }, []);
            groupedLookups.sort(sortLookups);
            const lookups = groupedLookups.slice(0, 1000);
            resolve({ lookups, sources: data.sources });
        });
    });
}

function sortLookups(a: HistoryItem, b: HistoryItem) {
    if (a.amount > b.amount) {
        return -1;
    }

    if (a.amount < b.amount) {
        return 1;
    }

    return 0;
}