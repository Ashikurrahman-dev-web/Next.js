"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import book from "@/image/book.png";
import facebook from "@/image/facebook.png";
import twitter from "@/image/twitter.png";
import instagram from "@/image/instagram.png";
import Link from "next/link";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="px-6 md:px-8 py-4 bg-white border-b border-gray-100">
            
            <div className="flex items-center justify-between">
              
              
              <h1 className="text-2xl font-extrabold tracking-tight">
                <span className="text-slate-900">Course</span>
                <span className="text-emerald-800">Hub</span>
              </h1>
              <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
                
              </div>
              <div className="flex items-center space-x-4 md:space-x-6">
                
                
                
                
   <button className="cursor-pointer hidden md:block bg-[#7C3AED] text-white px-6 py-2 rounded-full font-medium hover:bg-[#6D28D9] transition shadow-sm">
                 <Link href={"/login"}>Login</Link>
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden text-gray-700"
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
            {menuOpen && (
              <div className="mt-4 flex flex-col space-y-4 md:hidden text-gray-600 font-medium">
                
                  <button className="bg-[#7C3AED] text-white py-2 rounded-full cursor-pointer ">
                    <Link href={"/login"}>Login</Link>
                  </button>
                </div>
            )}
          </nav>
          <h6 className='flex text-green-600 mt-8 mb-8 text-2xl justify-center font-bold mx-auto'>Before visit the site please Login</h6>
    <div className="max-w-7xl mx-auto mt-8 mb-8 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 ml-9">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#7C3AED] px-4 py-1.5 rounded-full font-medium text-sm">
              <div className="w-2.5 h-2.5 bg-[#7C3AED] rounded-full"></div>
              New: Premium Courses Available
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-tight">
              Supercharge Your <span className='text-purple-500'>Future Workflow</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
              Access premium courses, exclusive content, and personalized learning paths to accelerate your growth
               and stay ahead in the modern world.
            </p>
            
            </div>
          <div className="flex justify-center md:justify-end">
            <Image 
              src={book} 
              alt="book" width={380} height={380}
              className="rounded-2xl shadow-2xl object-cover hover:scale-105 mr-9"
            />
          </div>
        </div>
        <footer className="bg-[#0f0524] text-white py-24 px-6 mb-0">
              <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold mb-3 tracking-tight">
                    CourseHub
                  </h2>
                  <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                    Be skilled, be future-ready. Explore our online courses and unlock your potential today.
                  </p>
                </div>
        
                <div className="flex flex-col items-center mb-12">
                  <span className="text-sm font-medium mb-4 uppercase tracking-widest">
                    Social Links
                  </span>
        
              <div className="flex space-x-4">
                <div className="bg-white p-2 rounded-full text-[#1a4332] hover:bg-gray-200 transition-all">
                   <Image src={facebook} alt="Facebook" width={20} height={20} />
                 </div>
        
               <div className="bg-white p-2 rounded-full text-[#1a4332] hover:bg-gray-200 transition-all">
                    <Image src={twitter} alt="Twitter" width={20} height={20} />
               </div>
        
             <div className="bg-white p-2 rounded-full text-[#1a4332] hover:bg-gray-200 transition-all">
                      <Image src={instagram} alt="Instagram" width={20} height={20} />
                 </div>
               </div>
                </div>
        
           <div className="w-full border-t border-emerald-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                  <p className='hover:text-white transition-colors'>© 2026 CourseHub. All rights reserved.</p>
        
              <div className="flex space-x-6 mt-4 md:mt-0">
                  <div className="hover:text-white transition-colors">Privacy Policy</div>
                    <div className="hover:text-white transition-colors">Terms of Service</div>
                    <div className="hover:text-white transition-colors">Cookies</div>
                  </div>
                </div>
        
              </div>
            </footer>
        </div>
  );
}
