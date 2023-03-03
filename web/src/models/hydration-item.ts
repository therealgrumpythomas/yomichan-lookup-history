export interface HistoryItem {
    text: string,
    amount: number,
    sources: Set<string>,
    creationDates: number[]
}

export interface HistoryItemSource {
    label: string
}