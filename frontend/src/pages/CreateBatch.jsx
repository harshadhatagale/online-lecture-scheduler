import { useEffect, useState } from "react";
import API from "../api/axios";

const CreateBatch = () => {

  const [courses, setCourses] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {

      const response = await API.get("/courses");

      setCourses(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await API.post(
        "/batches",
        formData
      );

      alert(response.data.message);

      setFormData({
        batchName: "",
        course: "",
      });

    } catch (error) {

      alert(
        error?.response?.data?.message ||
        "Failed to create batch"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4">

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-2">
          Create Batch
        </h1>

        <p className="text-slate-500 mb-8">
          Create a batch for a course
        </p>

        <form
          onSubmit={submitHandler}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Batch Name"
            value={formData.name}
            onChange={changeHandler}
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          />

          <select
            name="course"
            value={formData.course}
            onChange={changeHandler}
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          >

            <option value="">
              Select Course
            </option>

            {
              courses.map((course) => (
                <option
                  key={course._id}
                  value={course._id}
                >
                  {course.name}
                </option>
              ))
            }

          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg"
          >
            {
              loading
                ? "Creating..."
                : "Create Batch"
            }
          </button>

        </form>

      </div>

    </div>
  );
};

export default CreateBatch;