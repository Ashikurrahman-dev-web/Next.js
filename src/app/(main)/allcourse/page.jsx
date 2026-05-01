"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(""); // 

  // fetch data
  useEffect(() => {
    fetch("/course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  
  const handleSearch = () => {
    setQuery(search);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5 mb-5 px-4">
      
     
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

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition hover:scale-105"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-80 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-bold mb-2">
                {course.title}
              </h3>

              <p className="text-gray-500 text-sm mb-4">
                {course.description}
              </p>

              <div className="mb-4 text-sm text-gray-600">
                <p>👨‍🏫 {course.instructor}</p>
                <p>⏳ {course.duration}</p>
                <p>⭐ {course.rating}</p>
                <p>📂 {course.category}</p>
              </div>

              <Link href={`/course/${course.id}`}>
                <button className="bg-[#0f0524] text-white px-5 py-2 rounded-lg text-sm cursor-pointer">
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No courses found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default CoursePage;