import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [
        coursesResponse,
        batchesResponse,
        instructorsResponse,
      ] = await Promise.all([
        API.get("/courses"),
        API.get("/batches"),
        API.get("/users/instructors"),
      ]);

      setCourses(coursesResponse.data);
      setBatches(batchesResponse.data);
      setInstructors(instructorsResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome, {user?.name}
        </h1>

        <p className="text-slate-600">
          Admin Dashboard
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Courses
          </h2>

          <p className="text-4xl font-bold mt-3">
            {courses.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Batches
          </h2>

          <p className="text-4xl font-bold mt-3">
            {batches.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Instructors
          </h2>

          <p className="text-4xl font-bold mt-3">
            {instructors.length}
          </p>
        </div>

      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 mb-8">

        <button
          onClick={() => navigate("/create-course")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          Add Course
        </button>

        <button
          onClick={() => navigate("/create-batch")}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
        >
          Add Batch
        </button>

        <button
          onClick={() => navigate("/schedule-lecture")}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg"
        >
          Schedule Lecture
        </button>

      </div>

      {/* Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Courses */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-bold mb-4">
            Courses
          </h2>

          {courses.length > 0 ? (
            courses.map((course) => (
              <div
                key={course._id}
                className="border-b py-3"
              >
                <p className="font-medium">
                  {course.name}
                </p>

                <p className="text-sm text-gray-500">
                  {course.level}
                </p>
              </div>
            ))
          ) : (
            <p>No courses found</p>
          )}
        </div>

        {/* Batches */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-bold mb-4">
            Batches
          </h2>

          {batches.length > 0 ? (
            batches.map((batch) => (
              <div
                key={batch._id}
                className="border-b py-3"
              >
                <p className="font-medium">
                  {batch.name}
                </p>

                <p className="text-sm text-gray-500">
                  {batch.course?.name || "Course"}
                </p>
              </div>
            ))
          ) : (
            <p>No batches found</p>
          )}
        </div>

        {/* Instructors */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-bold mb-4">
            Instructors
          </h2>

          {instructors.length > 0 ? (
            instructors.map((instructor) => (
              <div
                key={instructor._id}
                className="border-b py-3"
              >
                <p className="font-medium">
                  {instructor.name}
                </p>

                <p className="text-sm text-gray-500">
                  {instructor.email}
                </p>
              </div>
            ))
          ) : (
            <p>No instructors found</p>
          )}
        </div>

      </div>

    </div>
  );
};

export default Dashboard;