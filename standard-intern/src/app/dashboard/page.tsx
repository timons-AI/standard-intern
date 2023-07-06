import { getServerSession} from "next-auth"
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";
import { LoginButton } from "@/components/auth";

export default async function Dashboard(){

    const session = await getServerSession(options);
    if(!session){ 
        // return redirect('/api/auth/signin')
        return redirect('/login')
    }
    
    return (
        <div className=" ">
            <h1 className=" text-4xl w-fit p-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-fuchsia-300 font-extrabold">Dashboard</h1>
            <LoginButton/>
        </div>
        
    )}
    
// export default async function Dashboard(){


    
//     return (
//         <h1 className=" font-semibold text-2xl text-center text-fuchsia-300">Dashboard</h1>
//     )
// }

