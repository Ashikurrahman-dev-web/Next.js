import Image from "next/image";
import React from "react";
import book from "@/image/book.jpg";
export default function Home() {
  return (
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
      
  );
}
