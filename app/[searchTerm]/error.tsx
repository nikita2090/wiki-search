'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const router = useRouter();

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl mb-10">Something went wrong!</h2>
            <div>
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="p-2 border-2 rounded border-slate-500 mr-5"
                >
                    Try again
                </button>
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => router.push('/')
                    }
                    className="p-2 border-2 rounded border-slate-500"
                >
                    Go back
                </button>
            </div>
        </div>
    );
}
