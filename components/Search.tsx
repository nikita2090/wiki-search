'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Search() {
    const [search, setSearch] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className=" flex justify-center md:w-1/3 md:justify-end "
        >
            <input
                value={search}
                onChange={handleSearchChange}
                className="bg-white p-2 text-lg rounded-md focus:outline-0 md:flex-grow"
                placeholder="Search"
            />
            <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold hover:bg-blue-200">
                🚀
            </button>
        </form>
    );
}
