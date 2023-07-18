import { API_ADDRESS, Result } from '@/api/getWikiResults';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    data: Result;
};

export default function ResultItem({ data }: Props) {
    return (
        <div className="flex mb-5">
            {data.thumbnail && (
                <Image
                    src={data.thumbnail.source}
                    alt={data.title}
                    width={data.thumbnail.width}
                    height={data.thumbnail.height}
                    className="rounded w-15 mr-5"
                />
            )}

            <div>
                <h2 className="text-2xl text-slate-900 underline">
                    <Link
                        href={`${API_ADDRESS}?curid=${data.pageid}`}
                        target="_blank"
                    >
                        {data.title}
                    </Link>
                </h2>
                <p className="text-lg">{data.extract}</p>
            </div>
        </div>
    );
}
