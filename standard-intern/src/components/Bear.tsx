"use client"
import React from 'react'
import useBearStore from '@/lib/store';
const Bear = () => {
    const bear = useBearStore((state: any ) => state.bears)
    const setBear = useBearStore((state: any)=> state.increasePopulation)

  return (
    <div className=' border p-2 border-dashed rounded  border-neutral-800'>
         <h1 className='text-2xl '>Bear store: <span className='  text-3xl'>
                {bear}
            </span></h1>
            <button className='p-1 transition-all duration  active:scale-95 rounded bg-rose-500 text-white' onClick={() => setBear('bear')}>Set Bear</button>
            <div className="w-[40px] h-[40px] rounded-full border-[3px] border-transparent border-r-[#474bff] animate-spin" />
    </div>
  )
}

export default Bear