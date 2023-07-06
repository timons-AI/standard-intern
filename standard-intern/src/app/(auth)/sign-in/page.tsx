import {FC } from 'react';
import Link from 'next/link';
import SignIn from '@/components/SignIn';
const page : FC = () => {
    return (
        <div className=' absolute inset-0'>
            <div className=' h-full max-x-2xl mx-auto flex flex-col items-center justify-center gap-20'>

                <Link href='/data' className=' bg-zinc-200 hover:bg-zinc-400 hover:text-white p-2 rounded'>
                    Back to home
                </Link>
                <SignIn />
            </div>
        </div>
    );
}

export default page;
