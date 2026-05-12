import React from 'react';
import EnrollModal from "@/component/shared/EnrollModal";
import Image from "next/image";
import B from "@/image/B.png";
import Link from "next/link";
const DigitalPage = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 mt-10">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">

       <Image
                 src={B}
                     alt="Digital Marketer"             width={500} height={100}
                     className=" rounded-2xl object-cover mx-auto mb-4"
                   />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-4">
            Digital Marketing
          </h1>

          <p className="text-gray-600 mb-6">
            Learn digital marketing fundamentals from scratch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">

            <p>
              <strong>Instructor:</strong> Hasibul Hasan
            </p>

            <p>
              <strong>Duration:</strong> 2 months
            </p>

            <p>
              <strong>Rating:</strong> ⭐4.7
            </p>

            <p>
              <strong>Category:</strong> Digital Marketing
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

export default DigitalPage;