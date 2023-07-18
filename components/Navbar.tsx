import Link from 'next/link';
import React from 'react';
import Search from './Search';

export default function Navbar() {
    return (
        <nav className="flex flex-col items-center md:flex-row md:justify-between py-5 px-5 md:px-20 bg-gray-700 fixed w-full">
            <h1 className="text-3xl pb-2.5 font-bold text-white md:pb-0">
                <Link href={'/'}>WikiSearch</Link>
            </h1>
            <Search />
        </nav>
    );
}
