"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from "@/component/shared/NavLink";
import avatar from "@/image/avatar.jpg"
import Image from 'next/image';
import { useUser } from "@/context/UserContext";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  return (
    <nav className="px-6 md:px-8 py-4 bg-white border-b border-gray-100">
      
      <div className="flex items-center justify-between">
        
        
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-slate-900">Course</span>
          <span className="text-emerald-800">Hub</span>
        </h1>
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <button className="cursor-pointer"><NavLink href={"/home"}>Home</NavLink></button>
          <button className="cursor-pointer"><NavLink href={"/allcourse"}>All Course</NavLink></button>
          <button className="cursor-pointer"><NavLink href={"/myprofile"}>My Profile</NavLink></button>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          
          <div className="hidden md:flex items-center gap-3">
  <Image
    src={user?.image || avatar}
    alt="avatar"
    width={40}
    height={40}
    className="rounded-full"
  />
  
  <div className="text-sm font-medium text-gray-600">
    {user?.name || "Name"}
  </div>
</div>
          
          
          
          <button
className="cursor-pointer hidden md:block bg-[#7C3AED] text-white px-6 py-2 rounded-full font-medium hover:bg-[#6D28D9] transition shadow-sm">
             <NavLink   href={"/"}>
          Log Out</NavLink>
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
          <button className="cursor-pointer"><NavLink href={"/home"}>Home</NavLink></button>
          <button className="cursor-pointer"><NavLink href={"/allcourse"}>All Course</NavLink></button>
          <button className="cursor-pointer"><NavLink href={"/myprofile"}>My Profile</NavLink></button>

          <div className="border-t pt-4 flex flex-col space-y-3">
            <div className="flex items-center gap-3">
  <Image
    src={user?.image || avatar}
    alt="avatar"
    width={40}
    height={40}
    className="rounded-full"
  />
  
  <div className="text-sm font-medium text-gray-600">
    {user?.name || "Name"}
  </div>
</div>
            <button className="bg-[#7C3AED] text-white py-2 rounded-full coursor-pointer">
              <NavLink
               href={"/"}>
                Log Out</NavLink></button>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;