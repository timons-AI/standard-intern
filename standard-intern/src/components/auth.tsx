'use client'
import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export const LoginButton = ()=>{
    const router = useRouter()
    const {data: session} = useSession()
    const buttonstyles = ' text-xl w-fit font-bold border text-white bg-neutral-600  rounded-md m-3 p-2 active:bg-neutral-400 active:text-black hover:bg-neutral-900 hover:text-white transition-all duration-150 active:scale-95 hover:scale-105'
   return (
    <div>
        {
            session ?
            <div className=''>
                <button className={buttonstyles} onClick={()=>router.push('/dashboard')}>Dashboard</button>
                <button className={buttonstyles} onClick={()=>signOut()}>Logout</button>
              
            </div>
                :
             <div>
                <button className={buttonstyles} onClick={()=>router.push('/login')}>Login or create an account</button> 
             </div>
        }
    </div>
   )
}
