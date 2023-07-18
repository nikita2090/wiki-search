export interface Result {
    pageid: string;
    title: string;
    extract: string;
    thumbnail?: {
        source: string;
        width: number;
        height: number;
    };
}

export interface SearchResult {
    query?: {
        pages?: Result[];
    };
}

export const API_ADDRESS = 'https://en.wikipedia.org';

export const getWikiResults = async (searchTerm: string) => {
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    });
    const response = await fetch(`${API_ADDRESS}/w/api.php?${searchParams}`);

    return response.json();
};
