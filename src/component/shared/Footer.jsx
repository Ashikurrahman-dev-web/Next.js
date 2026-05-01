import React from 'react';
import Image from "next/image";
import facebook from "@/image/facebook.png";
import twitter from "@/image/twitter.png";
import instagram from "@/image/instagram.png";
const Footer = () => {
    return (
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
    );
};

export default Footer;