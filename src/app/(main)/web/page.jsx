import React from 'react';
import EnrollModal from "@/component/shared/EnrollModal";
import Image from "next/image";
import C from "@/image/C.png";
import Link from "next/link";
const WebPage = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 mt-10">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">

       <Image
                     src={C}
                     alt="Web Developer"             width={200} height={300}
                     className=" rounded-2xl object-cover mb-4"
                   />
       

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-4">
            Web Development
          </h1>

          <p className="text-gray-600 mb-6">
            Learn full-stack web development from scratch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">

            <p>
              <strong>Instructor:</strong> Ashikur Rahman
            </p>

            <p>
              <strong>Duration:</strong> 6 months
            </p>

            <p>
              <strong>Rating:</strong> ⭐4.9
            </p>

            <p>
              <strong>Category:</strong> Web Development
            </p>

            <p>
              <strong>Level:</strong> Beginner
            </p>

          </div>

          <div className="flex items-center justify-between">

            <EnrollModal />

            <Link href="/home">
              <button className="bg-[#0f0524] cursor-pointer text-white px-6 py-3 rounded-xl">
                Go Back
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
    );
};

export default WebPage;