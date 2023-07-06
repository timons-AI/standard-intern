import Link from 'next/link';

const Navbar = () => {
    return (
        <div className=" fixed top-0 inset-x-0 h-fit  bg-zinc-100 border-b border-zinc-300 z-10 p-2 m-3 ">
            <div className="flex justify-between items-center gap-2">
            <Link href='/' >  from the icons </Link>
            <div className="flex gap-2">
                <Link href='/sign-in'> 
                    <button className="bg-zinc-300 hover:bg-zinc-400 text-zinc-900 hover:text-zinc-100 px-3 py-1 rounded-md"> Sign In </button>
                </Link>
                <Link href='/sign-out'> 
                    <button className="bg-zinc-300 hover:bg-zinc-400 text-zinc-900 hover:text-zinc-100 px-3 py-1 rounded-md"> Sign Out </button>
                 </Link>
            </div>
        </div>
        </div>
    )
}
    export default Navbar