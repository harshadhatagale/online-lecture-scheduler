import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {

    const { user } = useAuth();
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-slate-100 p-8">

            <h1 className="text-3xl font-bold mb-2">
                Welcome, {user?.name}
            </h1>

            <p className="text-slate-600 mb-8">
                Admin Dashboard
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-lg font-semibold">
                        Courses
                    </h2>

                    <p className="text-4xl font-bold mt-4">
                        0
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-lg font-semibold">
                        Batches
                    </h2>

                    <p className="text-4xl font-bold mt-4">
                        0
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-lg font-semibold">
                        Lectures
                    </h2>

                    <p className="text-4xl font-bold mt-4">
                        0
                    </p>
                </div>

            </div>

            <div className="flex gap-4 mt-10">

                <button
                    onClick={() => navigate("/create-course")}
                    className="bg-blue-600 text-white px-5 py-3 rounded-lg"
                >
                    Add Course
                </button>

                <button
                    onClick={() => navigate("/create-batch")}
                    className="bg-green-600 text-white px-5 py-3 rounded-lg"
                >
                    Add Batch
                </button>

                <button
                    onClick={() => navigate("/schedule-lecture")}
                    className="bg-purple-600 text-white px-5 py-3 rounded-lg"
                >
                    Schedule Lecture
                </button>

            </div>

        </div>
    );
};

export default Dashboard;