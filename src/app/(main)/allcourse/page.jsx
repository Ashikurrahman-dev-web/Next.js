"use client";

import "animate.css";
import React, { useState } from "react";
import Link from "next/link";
import coursesData from "@/data/course.json";

const CoursePage = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    setQuery(search);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5 mb-5 px-4">
      
      {/* Search Section */}
      <div className="mb-6 flex items-center justify-center gap-2">
        <input
          type="text"
          placeholder="Search courses by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#0f0524]"
        />

        <button
          onClick={handleSearch}
          className="bg-[#0f0524] text-white px-6 py-2 rounded-xl cursor-pointer"
        >
          Search
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 animate__animated animate__backInUp md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition duration-300 hover:scale-105"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-80 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-bold mb-2">
                {course.title}
              </h3>

              <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                {course.description}
              </p>

              <div className="mb-4 text-sm text-gray-600 space-y-1">
                <p>👨‍🏫 {course.instructor}</p>
                <p>⏳ {course.duration}</p>
                <p>⭐ {course.rating}</p>
                <p>📂 {course.category}</p>
              </div>

              <Link href={`/course/${course.id}`}>
                <button className="bg-[#0f0524] text-white px-5 py-2 rounded-lg text-sm cursor-pointer hover:bg-[#1f0a47] transition">
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full text-lg">
            No courses found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default CoursePage;