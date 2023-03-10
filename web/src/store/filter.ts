import { DateQueryValue, HistoryItem } from "../models/models";

interface FilterLookupsParams {
    sourceQuery?: string | null,
    dateQuery: DateQueryValue,
    textQuery?: string,
    deleted: string[],
    range: [number, number]
}

export function filterLookups(lookups: HistoryItem[], params: FilterLookupsParams) {
    const doSearchSource = params.sourceQuery && params.sourceQuery.length > 0;
    const doSearchQuery = params.textQuery && params.textQuery.length > 0;
    const now = new Date();
    let minimumDate = now.setDate(now.getDate() - params.dateQuery.days);

    const filteredLookups = lookups.reduce<HistoryItem[]>((acc, lookup) => {
        let isMatch = false;
        if (params.deleted.indexOf(lookup.text) > -1) {
            return acc;
        }

        if (doSearchSource && params.sourceQuery) {
            isMatch = lookup.sources.has(params.sourceQuery);
            if (!isMatch) {
                return acc;
            }
        }

        isMatch = !!lookup.creationDates.find((d) => d >= minimumDate);
        if (!isMatch) {
            return acc;
        }

        if (doSearchQuery && params.textQuery) {
            isMatch = lookup.text.indexOf(params.textQuery) > -1;
            if (!isMatch) {
                return acc;
            }
        }

        if (isMatch) {
            const now = new Date();
            const minimumDate = now.setDate(now.getDate() - params.dateQuery.days);
            lookup.amount = lookup.creationDates.reduce((sum, date) => {
                if (date >= minimumDate) {
                    return sum + 1;
                }
                return sum;
            }, 0);

            acc.push(lookup);
        }

        return acc;
    }, []);

    filteredLookups.sort(sortLookups);
    return {
        lookups: filteredLookups.slice(Math.min(...params.range), Math.max(...params.range)),
        total: filteredLookups.length
    };
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