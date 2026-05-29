import { useEffect, useState } from "react";
import API from "../api/axios";

const MyLectures = () => {

  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLectures();
  }, []);

  const fetchLectures = async () => {

    try {

      const response = await API.get(
        "/lectures/my-lectures"
      );

      setLectures(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-3xl font-bold mb-6">
        My Lectures
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-200">

            <tr>
              <th className="p-4 text-left">
                Course
              </th>

              <th className="p-4 text-left">
                Batch
              </th>

              <th className="p-4 text-left">
                Date
              </th>
            </tr>

          </thead>

          <tbody>

            {
              lectures.map((lecture) => (

                <tr
                  key={lecture._id}
                  className="border-b"
                >

                  <td className="p-4">
                    {
                      lecture.batch?.course?.name
                    }
                  </td>

                  <td className="p-4">
                    {
                      lecture.batch?.name
                    }
                  </td>

                  <td className="p-4">
                    {
                      new Date(
                        lecture.lectureDate
                      ).toLocaleDateString()
                    }
                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default MyLectures;