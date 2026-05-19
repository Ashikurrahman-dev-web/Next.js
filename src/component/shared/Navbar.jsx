"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from "@/component/shared/NavLink";
import { authClient } from '@/lib/auth-client';
import { Avatar } from "@heroui/react";
const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData?.user;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="px-6 md:px-8 py-4 bg-white border-b border-gray-100">
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-slate-900">Course</span>
          <span className="text-emerald-800">Hub</span>
        </h1>
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
         <NavLink href={"/home"}> <button className="cursor-pointer">Home</button></NavLink>
    <NavLink href={"/allcourse"}>  <button className="cursor-pointer">All Course</button></NavLink>
        <NavLink href={"/myprofile"}>  <button className="cursor-pointer">My Profile</button></NavLink>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="md:flex items-center gap-3">
  {user && (
            <div className="flex gap-4 items-center">
              <Avatar size="sm">
                <Avatar.Image alt={user.name} src={user?.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
              </Avatar>
            </div>
          )}
  <NavLink   href={"/"}>    <button
className="cursor-pointer hidden md:block bg-[#7C3AED] text-white px-6 py-2 rounded-full font-medium hover:bg-[#6D28D9] transition shadow-sm">
             
          Log Out
          </button></NavLink>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>
      {menuOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden text-gray-600 font-medium">
         <NavLink href={"/home"}> <button className="cursor-pointer">Home</button></NavLink>
        <NavLink href={"/allcourse"}>  <button className="cursor-pointer">All Course</button></NavLink>
        <NavLink href={"/myprofile"}>  <button className="cursor-pointer">My Profile</button></NavLink>

          <div className="border-t pt-4 flex flex-col space-y-3">
            
           <NavLink
               href={"/"}> <button className="bg-[#7C3AED] text-white py-2 rounded-full cursor-pointer">
              
                Log Out</button></NavLink>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;