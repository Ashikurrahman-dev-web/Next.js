"use client";
import React, { useState } from "react";

const EnrollModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <button
        onClick={() => setOpen(true)}
        className="bg-[#0f0524] cursor-pointer text-white px-6 py-3 rounded-xl"
      >
        Enroll Now
      </button>

      
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-80">
            <h2 className="text-xl font-bold mb-4 text-green-600">
              ✅ Enroll Done!
            </h2>

            <p className="text-gray-600 mb-6">
              You have successfully enrolled in this course.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="bg-[#0f0524] text-white px-5 py-2 rounded-lg cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default EnrollModal;