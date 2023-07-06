"use client";
import Input from "@/components/Input";
import { useState, useCallback } from "react";
import axios from "axios";
import { signIn} from "next-auth/react";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import { useRouter} from 'next/navigation';

const Auth = () => {
    const router = useRouter();
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant)=> currentVariant === 'login' ? 'register' : 'login')
    },[]);

    
    const login = useCallback(async ()=>{
        try{
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
                callbackUrl: '/'
            });
            console.log({
                email: email,
                password: password,

            })
            console.log('result',result);
           router.push('/') 
        }catch(error){
            console.log (error);
        }
    },[email, password, ]);


    const register = useCallback(async ()=>{
        try{
            await axios.post('/api/register', {
                email: email,
                name: name,
                unhashedPassword: password,
                });
                console.log({
                    email: email,
                    name: name,
                    unhashedPassword: password,
                })
            login();

        }catch(error){
            console.log (error);
        }
    },[email, password, name, login]);

    return (
        <div className=" relative h-full w-full bg-[url('/Hero.jpg')] bg-center bg-norepeat bg-cover">
        <div className=" bg-black w-full h-full lg:bg-opacity-50">
            <nav className="px-12 py-5 ">
                <img src="/images/logo.png" alt=" logo" className="h-12" />
            </nav>
            <div className=" flex justify-center">
                <div className=" bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg: max-w-md rounded-lg">
                    <h2 className=" text-white text-4xl mb-8 font-semibold">
                        {variant === 'login' ? 'Sign In' : 'Register'}
                    </h2>
                    <div className="flex  flex-col gap-4">
                        {variant === 'register' &&(
                            <Input
                       label="Name"
                       onChange={(ev: any)=>{setName(ev.target.value)}}
                       id="name"
                       type="name"
                       value={name}
                       />
                        )}
                       
                       <Input
                       label="Email"
                       onChange={(ev:any)=>{setEmail(ev.target.value)}}
                       id="email"
                       type="email"
                       value={email}
                       />
                       <Input
                       label="Password"
                       onChange={(ev:any)=>{setPassword(ev.target.value)}}
                       id="password"
                       type="password"
                       value={password}
                       />
                    </div>
                    <button onClick={variant === 'login' ? login : register} className=" bg-teal-600 py-3 text-white rounded-md w-full mt-10 hover:bg-teal-700 transition ">
                        { variant === 'login' ? 'Sign In' : 'Register'}
                    </button>
                    <div className=" flex flex-row items-center gap-4 mt-8 justify-center ">
                            <div className=" w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FcGoogle className=" text-2xl" />
                            </div>
                            <div onClick={()=>signIn('github', {callbackUrl: '/'})} className=" w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FaGithub className=" text-2xl" />
                            </div>
                    </div>
                    <p className=" text-neutral-500 mt-12 ">{variant === 'login' ? 'First time using Standard Intern?' : 'Already have an account?'}
                        <span className=" text-white ml-1 hover:underline cursor-pointer" onClick={toggleVariant}>{variant === 'login' ?'Create an Account' :'login'}</span>
                    </p>
                </div>
            </div>
        </div>
            
        </div>
    );
    };

export default Auth;