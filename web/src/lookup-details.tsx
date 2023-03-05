import React, { useEffect } from 'react';
import { HistoryItem } from './models/models';

interface Props {
    selectedItem: HistoryItem,
    goBack: Function,
    onDelete: (item: HistoryItem) => void,
    onEdit: (item: HistoryItem, newText: string) => void
}

function LookupDetails({ selectedItem, goBack, onDelete, onEdit }: Props) {
    useEffect(() => {
        window.scrollTo({top:0, behavior: 'auto'});
    }, [])
    return (
        <div>
            <div>
                <button className="secondary outline" onClick={() => goBack()}>Back</button>
            </div>
            <article id="example-sentences">
                <hgroup>
                    <h2>{selectedItem.text}</h2>
                    <Subtitle item={selectedItem} />
                </hgroup>

                <Sentences item={selectedItem} />
                <Sources item={selectedItem} />

                <h3>Links</h3>
                <ul>
                    <li>
                        <a href={`https://jpdb.io/search?q=${selectedItem.text}&lang=english#a`} target="_blank">jpdb</a>
                    </li>
                    <li>
                        <a href={`https://massif.la/ja/search?q=${selectedItem.text}`} target="_blank">More example sentences</a>
                    </li>
                </ul>

            {/* <button className="secondary">Normalize using jpdb</button> */}
            <button className="secondary" onClick={() => {
                let text = prompt(`Edit ${selectedItem.text}`, selectedItem.text);
                if (text === null || selectedItem.text === text) {
                    return;
                }

                text = text.trim();
                if (text.length === 0) {
                    return;
                }

                onEdit(selectedItem, text);
            }}>Edit</button>
            <button className="secondary" onClick={() => onDelete(selectedItem)}>Delete</button>
            </article>

        </div >
    );
}

interface SubtitleProps {
    item: HistoryItem
}
const Subtitle = ({ item }: SubtitleProps) => {
    if (!item.sentences) {
        return <h3 aria-busy="true"></h3>;
    }

    if (item.sentences.size > 0) {
        const iterator = item.sentences.values();
        const sentence = iterator.next();
        if (sentence.value.length > 0) {
            return <h3 dangerouslySetInnerHTML={{ __html: sentence.value }}></h3>
        }
    }

    return <h3>No sentences found</h3>
}

interface SentencesProps {
    item: HistoryItem
}
const Sentences = ({ item }: SentencesProps) => {
    const sentences = Array.from(item.sentences).slice(1);
    if (sentences.length === 0) {
        return <></>
    }

    return (
        <div>
            <details>
                <summary>Show {sentences.length} more sentences</summary>
                <ul>
                    {sentences.map((s, i) => (<li key={i} dangerouslySetInnerHTML={{ __html: s }}></li>))}
                </ul>
            </details>
        </div>
    );
}

interface SourcesProps {
    item: HistoryItem
}

const Sources = ({ item }: SourcesProps) => {
    const sources = Array.from(item.sources);
    return (
        <details open={false}>
            <summary>Show {sources.length} sources</summary>
            <ul>
                {
                    sources.map((s, i) => <li key={i}>{s}</li>)
                }
            </ul>
        </details>
    );
}

export default LookupDetails;

