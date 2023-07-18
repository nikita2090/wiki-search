import React from 'react';
import { Result, SearchResult, getWikiResults } from '../../api/getWikiResults';
import ResultItem from '@/components/ResultItem';

type Props = {
    params: {
        searchTerm: string;
    };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
    const data: SearchResult = await getWikiResults(searchTerm);
    const result: Result[] | undefined = data?.query?.pages;

    const term = searchTerm.replaceAll('%20', ' ');

    if (!result) {
        return {
            title: `${term} not found`,
        };
    }

    return {
        title: `${term}`,
        description: `Search results for ${term}`,
    };
}

export default async function SearchResult({ params: { searchTerm } }: Props) {
    const data: SearchResult = await getWikiResults(searchTerm);
    const result: Result[] | undefined = data?.query?.pages;

    if (!result) {
        return <h2>No results</h2>;
    }
    return (
        <div>
            {Object.values(result).map((item) => (
                <ResultItem data={item} key={item.pageid} />
            ))}
        </div>
    );
}
