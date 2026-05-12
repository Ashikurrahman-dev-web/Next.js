import Image from "next/image";
import React from "react";
import book from "@/image/book.png";
import digital from "@/image/digital.png";
import web from "@/image/web.png";
import graphic from "@/image/graphic.png";
import Marquee from "react-fast-marquee";
import A from "@/image/A.png";
import B from "@/image/B.png";
import C from "@/image/C.png";
import Link from "next/link";
import 'animate.css';
const HomePage = ()=> {
  return (
    <div>
    <div className="max-w-7xl mx-auto mt-8 mb-8 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 ml-9 animate__animated animate__backInLeft">
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
          <div className="flex justify-center md:justify-end animate__animated animate__backInRight">
            <Image 
              src={book} 
              alt="book" width={380} height={380}
              className="rounded-2xl shadow-2xl object-cover hover:scale-105 mr-9"
            />
          </div>
        </div>
     <h2 className="flex items-center justify-center text-blue-600 text-2xl font-bold mb-6">
          Top 3 highest-rated courses
</h2>
        <div className="max-w-7xl mx-auto mt-8 mb-8 grid md:grid-cols-3 gap-12 items-center">
          <div
            
className="bg-white rounded-xl animate__animated animate__backInLeft shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition hover:scale-105">
           
            <Image
              src={digital}
              alt="digital"             width={200} height={200}
              className=" rounded-2xl object-cover mb-4"
            />

            
            <h3 className="font-semibold text-lg">Digital Marketing</h3>

            
            <p className="text-sm text-gray-500 mb-3">
             Hasibul Hasan
            </p>

            
            <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
               4.7★
               </div>
<Link href={"/digital"}><button 
className="bg-[#0f0524] text-xs mt-2 text-white cursor-pointer transition px-6 py-3 rounded-xl font-medium shadow-lg">
               View Details</button></Link>
            
          </div>
              <div
            
  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition hover:scale-105">
           
            <Image
              src={web}
              alt="web"             width={200} height={200}
              className=" rounded-2xl object-cover mb-4"
            />

            
            <h3 className="font-semibold text-lg">Web Development</h3>

            
            <p className="text-sm text-gray-500 mb-3">
             Ashikur Rahman
            </p>

            
            <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
               4.9★
               </div>
<Link href={"/web"}><button 
 className="bg-[#0f0524] text-xs mt-2 text-white cursor-pointer transition px-6 py-3 rounded-xl font-medium shadow-lg">
                View Details</button></Link>
            
          </div>
              <div
            
            className="bg-white rounded-xl animate__animated animate__backInRight shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition hover:scale-105">
           
            <Image
              src={graphic}
              alt="graphic"             width={200} height={200}
              className=" rounded-2xl object-cover mb-4"
            />

            
            <h3 className="font-semibold text-lg">Graphic Design</h3>

            
            <p className="text-sm text-gray-500 mb-3">
            Abdullah Shakir
            </p>

            
            <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
               4.8★
               </div>
<Link href={"/graphic"}><button 
 className="bg-[#0f0524] text-xs mt-2 text-white cursor-pointer transition px-6 py-3 rounded-xl font-medium shadow-lg">
                View Details</button></Link>
             </div>
             <Link href={"/allcourse"}>
        <button
 className="ml-5 border-2 cursor-pointer border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white font-bold px-8 py-5 rounded-full transition-all duration-300"
        >
          See More
        </button></Link>
        </div>
    <h2 className="flex items-center justify-center text-purple-600 text-2xl font-bold mb-6">
          🧠 Effective Study Techniques
</h2>
        <Marquee pauseOnHover={true} speed={25} className="font-bold bg-gray-200 py-4 container mx-auto rounded-2xl">
          Success isn’t about how many hours you sit at a desk, but how you use them.

Active Recall: Instead of just re-reading your notes, close the book and try to recite everything you remember. This forces your brain to retrieve information, which strengthens memory.

Spaced Repetition: Don’t cram! Review your material at increasing intervals (e.g., 1 day later, 3 days later, then 1 week later). This moves information from short-term to long-term memory.

The Feynman Technique: Try to explain a complex concept to a child (or a rubber duck). If you can't explain it simply, you don't understand it well enough yet.

SQ3R Method: When reading a textbook, use Survey, Question, Read, Recite, and Review. It turns passive reading into active engagement.
        </Marquee>
        <h2 className="flex items-center justify-center text-purple-600 text-2xl font-bold mb-6">⏰ Time Management Tips
</h2>
<Marquee pauseOnHover={true} speed={25} className="font-bold bg-gray-200 py-4 container mx-auto rounded-2xl">
  Good time management reduces stress and ensures you actually have a "life" outside of studying.

The Pomodoro Technique: Work for 25 minutes, then take a 5-minute break. After four sessions, take a longer break (15–30 minutes). This keeps your brain fresh and prevents "zoning out."

Eat the Frog: Do your most difficult or most dreaded task first thing in the morning. Once it's done, everything else will feel much easier.

Eisenhower Matrix: Categorize your tasks into four boxes:

Urgent & Important: Do these immediately.

Not Urgent but Important: Schedule these.

Urgent but Not Important: Delegate these (if possible).

Neither: Delete/Ignore these.

Time Blocking: Instead of a simple "To-Do" list, assign specific hours of the day to specific tasks on your calendar.
</Marquee>
 <h2 className="mt-4 flex items-center justify-center text-green-800 text-2xl font-bold mb-6">🏆 Top 3 Instructors
</h2>
<div className="max-w-7xl mx-auto mt-8 mb-8 grid md:grid-cols-3 gap-12 items-center">
<div
            
     className="bg-white rounded-xl animate__animated animate__backInLeft shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition hover:scale-105">
           
            <Image
              src={B}
              alt="Digital Marketer"             width={200} height={100}
              className=" rounded-2xl object-cover mb-4"
            />

            
            <h3 className="font-semibold text-lg">Digital Marketer</h3>

            
            <p className="text-sm text-gray-500 mb-3">
            Hasibul Hasan
            </p>

            
            <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
               4.7★
               </div>
</div>
<div
            
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition hover:scale-105">
           
            <Image
              src={C}
              alt="Web Developer"             width={200} height={300}
              className=" rounded-2xl object-cover mb-4"
            />

            
            <h3 className="font-semibold text-lg">Web Developer</h3>

            
            <p className="text-sm text-gray-500 mb-3">
            Ashikur Rahman
            </p>

            
            <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
               4.9★
               </div>
</div>
<div
            
    className="bg-white rounded-xl animate__animated animate__backInRight shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition hover:scale-105">
           
            <Image
              src={A}
              alt="Graphic Designer"             width={200} height={300}
              className=" rounded-2xl object-cover mb-4"
            />

            
            <h3 className="font-semibold text-lg">Graphic Designer</h3>

            
            <p className="text-sm text-gray-500 mb-3">
            Abdullah Shakir
            </p>

            
            <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
               4.8★
               </div>
</div>
        </div>
        </div>
  );
}
export default HomePage;