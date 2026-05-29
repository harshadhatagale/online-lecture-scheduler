import { useState } from "react";
import API from "../api/axios";

const CreateCourse = () => {

  const [formData, setFormData] = useState({
    name: "",
    level: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

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
        "/courses",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        level: "",
        description: "",
        image: "",
      });

    } catch (error) {

      alert(
        error?.response?.data?.message ||
        "Failed to create course"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4">

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-2">
          Create Course
        </h1>

        <p className="text-slate-500 mb-8">
          Add a new course
        </p>

        <form
          onSubmit={submitHandler}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Course Name"
            value={formData.name}
            onChange={changeHandler}
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          />

          <select
            name="level"
            value={formData.level}
            onChange={changeHandler}
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          >
            <option value="">
              Select Level
            </option>

            <option value="Beginner">
              Beginner
            </option>

            <option value="Intermediate">
              Intermediate
            </option>

            <option value="Advanced">
              Advanced
            </option>
          </select>

          <textarea
            name="description"
            placeholder="Course Description"
            value={formData.description}
            onChange={changeHandler}
            rows="5"
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={changeHandler}
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            {
              loading
              ? "Creating..."
              : "Create Course"
            }
          </button>

        </form>

      </div>

    </div>
  );
};

export default CreateCourse;