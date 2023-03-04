import { atom, useAtomValue, useSetAtom } from 'jotai';
import React, { useEffect } from 'react';
import { HistoryItem } from './models/hydration-item';
import * as DOMPurify from 'dompurify';

interface Example {
    text: string,
    sentences: ExampleSentence[],
    state: 'error' | 'hasData' | 'loading'
}

interface ExampleSentence {
    source: {
        title: string,
        url: string
    },
    text: string,
    markup: string
}

const examplesAtom = atom<Example>({
    text: '',
    sentences: [],
    state: 'loading'
});

const fetchExamplesAtom = atom(
    null,
    async (_get, set, text: string) => {
        set(examplesAtom, {
            state: 'loading',
            text,
            sentences: []
        });

        const response = await fetch(`https://massif.la/ja/search?q=${text}&fmt=json`);
        const body = await response.json();
        set(examplesAtom, {
            state: 'hasData',
            text: text,
            sentences: body.results.slice(0, 11).reduce((acc: ExampleSentence[], result: any) => {
                acc.push({
                    source: {
                        title: result.sample_source.title,
                        url: result.sample_source.url
                    },
                    text: result.text,
                    markup: DOMPurify.sanitize(result.highlighted_html)
                });
                return acc;
            }, [])
        });
    }
)

interface Props {
    selectedItem: HistoryItem,
    goBack: Function
}

function LookupDetails({ selectedItem, goBack }: Props) {
    const data = useAtomValue(examplesAtom);
    const fetchData = useSetAtom(fetchExamplesAtom);
    useEffect(() => {
        fetchData(selectedItem.text);
    }, [fetchData, selectedItem]);
    console.log(data);
    return (
        <div>
            <div>
                <button className="secondary outline" onClick={() => goBack()}>Back</button>
            </div>
            <article id="example-sentences">
                <hgroup>
                    <h2>{selectedItem.text}</h2>
                    <Subtitle example={data} />
                </hgroup>
                <Sentences example={data} />

            </article>

            <article>
                <h2>Sources</h2>
                <ul>
                    {
                        Array.from(selectedItem.sources).map((s, i) => <li key={i}>{s}</li>)
                    }
                </ul>
            </article>


            <button className="secondary">Normalize using jpdb</button>
            <button className="secondary">Delete</button>
        </div>
    );
}

interface SubtitleProps {
    example: Example
}
const Subtitle = ({ example }: SubtitleProps) => {
    if (example.state === 'loading') {
        return <h3 aria-busy="true"></h3>;
    }

    if (example.state === 'error') {
        return <h3></h3>
    }

    if (example.sentences.length > 0 && example.sentences[0]) {
        return <h3 dangerouslySetInnerHTML={{__html: example.sentences[0].markup}}>{}</h3>
    }

    return <h3>No example sentences found</h3>
}

interface SentencesProps {
    example: Example
}
const Sentences = ({ example }: SentencesProps) => {
    const sentences = example.sentences.slice(1);
    return (
        <div>
            <details>
                <summary>show {sentences.length} more sentences</summary>
                <ul>
                    {sentences.map((s, i) => (<li key={i} dangerouslySetInnerHTML={{__html: s.markup}}></li>))}
                </ul>
            </details>
        </div>
    );
}

export default LookupDetails;

