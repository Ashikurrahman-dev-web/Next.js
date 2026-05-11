"use client"
import { useRouter } from "next/navigation";
 import {FaEye,FaGoogle, FaEyeSlash } from "react-icons/fa";
 import React, { useState } from 'react';
  import Link from 'next/link';
   import { useForm } from "react-hook-form";
    import {authClient} from '@/lib/auth-client'; 
    import toast from "react-hot-toast";
    const LoginPage = () => {
        const router = useRouter();
        const handleGoogleSignIn = async () => {
  try {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/home",
    });
  } catch (err) {
    toast.error("❌ Google Login Failed!");
    console.log(err);
  }
};
         const {register, handleSubmit, formState:{errors}} = useForm()
          const handleLoginFunc = async (data) => {

  try {

    const { data: res, error } =
      await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("✅ Login Successful!");

    router.push("/home");

  } catch (err) {
    toast.error("❌ Login Failed!");
    console.log(err);
  }
};
         const [isShowPassword, setIsShowPassword] = useState(false);
                return (
         <div className="max-w-7xl mx-auto mt-8 mb-8 grid md:grid-cols-2 gap-12 items-center">
                 <div className="grid gap-2">
            <h6 className='text-center text-black font-bold'>Login with google</h6> 
<button onClick={handleGoogleSignIn}
className="bg-blue-600 flex justify-center gap-2 items-center text-white py-2 rounded-full cursor-pointer ">
                 <span><FaGoogle /></span> Login with google
                  </button>
             </div>
     <div className='container mx-auto min-h-[80vh] flex justify-center items-center'> 
 <div className='p-4 rounded-xl bg-white'>
<h6 className='text-center text-blue-600 font-bold'>Login your account</h6> 
     <form onSubmit={handleSubmit(handleLoginFunc)}> 
<fieldset className="fieldset bg-base-200 border-base-300 rounded-full w-xs border p-4"> 
  <legend className="fieldset-legend font-bold text-black">Email Address</legend> 
 <input type="Email" className="input rounded-full" placeholder="Enter Your Email Address" {...register("email",{required: "Email field is required"})}/> 
   {errors.email &&<p className='text-red-500 text-center font-bold'>{errors.email.message}</p>} 
     <legend className="fieldset-legend font-bold text-black">Password</legend> 
       
      <input type={isShowPassword ? "text": "password"} 
          className="input rounded-full" placeholder="Type Your Password" {...register("password",{required: "Password field is required"})}/> 
         <button className="ml-50 cursor-pointer" onClick={()=>setIsShowPassword(!isShowPassword)}> 
     {isShowPassword ? <FaEye /> : <FaEyeSlash />}</button> 
    {errors.password &&<p className='text-red-500 text-center font-bold'>{errors.password.message}</p>}
        <button  className="btn btn-neutral rounded-full bg-blue-600 mt-4">
          Login
        </button>
    </fieldset></form>
        <div className='flex justify-center items-center gap-1'>
         <p>Don't Have An Account?</p> 
         
            <Link href="/register" className='cursor-pointer text-blue-600'>Register</Link></div> 
            </div> 
            </div>
            </div>
             ); }; 
export default LoginPage;       