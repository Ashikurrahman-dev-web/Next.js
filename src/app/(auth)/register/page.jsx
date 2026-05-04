"use client"

import {FaEye,FaGoogle, FaEyeSlash } from "react-icons/fa";
import React,{ useState } from 'react';
import Link from 'next/link';
import  {authClient}  from '@/lib/auth-client';
import { useForm } from "react-hook-form"
const RegisterPage = () => {
  
    const {register, handleSubmit, formState:{errors}} = useForm()
    const handleRegisterFunc = async(data) =>{
        console.log(data,"data");
        const {email,name,password} = data;
        const {data: res, error} = await authClient.signUp.email({
name: name, 
    email: email, 
    password:password, 
    callbackURL: "/",
        });
        console.log(res, error);
    };
     const [isShowPassword, setIsShowPassword] = useState(false);
     const handleGoogleSignIn =async ()=>{
                 const data = await authClient.signIn.social({
         provider: "google",
       });
             }
    return (
      <div className="max-w-7xl mx-auto mt-8 mb-8 grid md:grid-cols-2 gap-12 items-center">
         <div className="grid gap-2">
            <h6 className='text-center text-black font-bold'>Login with google</h6> 
<button onClick={handleGoogleSignIn}
className="bg-blue-600 flex justify-center gap-2 items-center text-white py-2 rounded-full cursor-pointer ">
                 <span><FaGoogle /></span> <Link href={"/home"}>Login with google</Link>
                  </button>
             </div>
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center'>
          <div className='p-4 rounded-xl bg-white'>
            <h6 className='text-center text-blue-600 font-bold'>Register your account</h6>
            <form onSubmit={handleSubmit(handleRegisterFunc)}>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-full w-xs border p-4">
  <legend className="fieldset-legend font-bold text-black">Name</legend>
  <input type="text" className="input rounded-full" 
   placeholder="Type Your Name"  {...register("name",{required: "Name field is required"})}/>
{errors.name &&<p className='text-red-500 text-center font-bold'>{errors.name.message}</p>}
  
  <legend className="fieldset-legend font-bold text-black">Email Address</legend>
  <input type="Email" className="input rounded-full" 
   placeholder="Enter Your Email Address"  {...register("email",{required: "Email field is required"})}/>
{errors.email &&<p className='text-red-500 text-center font-bold'>{errors.email.message}</p>}
  <legend className="fieldset-legend font-bold text-black">Password</legend>
  <input type={isShowPassword ? "text": "password"} className="input rounded-full" 
   placeholder="Type Your Password"  {...register("password",{required: "Password field is required"})}/>
   <button className="ml-50 cursor-pointer" onClick={()=>setIsShowPassword(!isShowPassword)}> 
        {isShowPassword ? <FaEye /> : <FaEyeSlash />}</button> 
{errors.password &&<p className='text-red-500 text-center font-bold'>{errors.password.message}</p>}
  <button className="btn btn-neutral rounded-full bg-blue-600 mt-4"><Link href={"/login"}>Register</Link></button>
</fieldset></form>
</div>
        </div>
        </div>
    );
};

export default RegisterPage;