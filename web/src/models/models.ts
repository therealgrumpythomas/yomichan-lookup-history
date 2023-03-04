export interface DateQueryValue {
    label: string,
    value: 'day' | 'week' | 'month' | 'year',
    days: number
}

export const dateQueryValueWeek: DateQueryValue = {
    label: 'Last week',
    value: 'week',
    days: 7
};

export const dateQueryValues: DateQueryValue[] = [
    {
        label: 'Last day',
        value: 'day',
        days: 1
    },
    dateQueryValueWeek,
    {
        label: 'Last month',
        value: 'month',
        days: 31
    },
    {
        label: 'Last year',
        value: 'year',
        days: 365
    },
];

export interface HistoryItem {
    text: string,
    amount: number,
    sentences: Set<string>,
    sources: Set<string>,
    creationDates: number[]
}

export interface HistoryItemSource {
    label: string
}

export interface Example {
    text: string,
    sentences: ExampleSentence[],
    state: 'error' | 'hasData' | 'loading'
}

export interface ExampleSentence {
    source: {
        title: string,
        url: string
    },
    text: string,
    markup: string
}