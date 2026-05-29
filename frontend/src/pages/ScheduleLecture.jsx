import { useEffect, useState } from "react";
import API from "../api/axios";

const ScheduleLecture = () => {

  const [batches, setBatches] = useState([]);
  const [instructors, setInstructors] = useState([]);

  const [formData, setFormData] = useState({
    batch: "",
    instructor: "",
    lectureDate: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBatches();
    fetchInstructors();
  }, []);

  const fetchBatches = async () => {
    try {
      const response = await API.get("/batches");
      setBatches(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchInstructors = async () => {
    try {
      const response = await API.get(
        "/users/instructors"
      );

      setInstructors(response.data);

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
        "/lectures",
        formData
      );

      alert(response.data.message);

      setFormData({
        batch: "",
        instructor: "",
        lectureDate: "",
      });

    } catch (error) {

      alert(
        error?.response?.data?.message ||
        "Failed to schedule lecture"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4">

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-2">
          Schedule Lecture
        </h1>

        <p className="text-slate-500 mb-8">
          Assign instructor and date
        </p>

        <form
          onSubmit={submitHandler}
          className="space-y-5"
        >

          <select
            name="batch"
            value={formData.batch}
            onChange={changeHandler}
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          >
            <option value="">
              Select Batch
            </option>

            {
              batches.map((batch) => (
                <option
                  key={batch._id}
                  value={batch._id}
                >
                  {batch.name}
                </option>
              ))
            }

          </select>

          <select
            name="instructor"
            value={formData.instructor}
            onChange={changeHandler}
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          >
            <option value="">
              Select Instructor
            </option>

            {
              instructors.map((instructor) => (
                <option
                  key={instructor._id}
                  value={instructor._id}
                >
                  {instructor.name}
                </option>
              ))
            }

          </select>

          <input
            type="date"
            name="lectureDate"
            value={formData.lectureDate}
            onChange={changeHandler}
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-3 rounded-lg"
          >
            {
              loading
                ? "Scheduling..."
                : "Schedule Lecture"
            }
          </button>

        </form>

      </div>

    </div>
  );
};

export default ScheduleLecture;