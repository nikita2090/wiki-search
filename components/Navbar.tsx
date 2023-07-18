import Link from 'next/link';
import React from 'react';
import Search from './Search';

export default function Navbar() {
    return (
        <nav className="flex justify-between p-5 bg-gray-700 fixed w-full">
            <h1 className="text-3xl font-bold text-white">
                <Link href={'/'}>WikiSearch</Link>
            </h1>
            <Search />
        </nav>
    );
}
