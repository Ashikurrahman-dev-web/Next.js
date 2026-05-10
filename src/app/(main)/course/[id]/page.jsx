
import Link from "next/link";
import React from "react";
import EnrollModal from "@/component/shared/EnrollModal";
import courses from "@/data/course.json";

async function getCourse(id) {
  return courses.find(
    (course) => String(course.id) === String(id)
  );
}

const CourseDetailsPage = async ({ params }) => {

  
  const { id } = await params;

  const course = await getCourse(id);

  if (!course) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h1 className="text-3xl font-bold">
          Course not found 😢
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[500px] object-cover"
        />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-4">
            {course.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {course.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">

            <p>
              <strong>Instructor:</strong> {course.instructor}
            </p>

            <p>
              <strong>Duration:</strong> {course.duration}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {course.rating}
            </p>

            <p>
              <strong>Category:</strong> {course.category}
            </p>

            <p>
              <strong>Level:</strong> {course.level}
            </p>

          </div>

          <div className="flex items-center justify-between">

            <EnrollModal />

            <Link href="/allcourse">
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

export default CourseDetailsPage;