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
]