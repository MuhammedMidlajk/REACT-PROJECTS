import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
    const { state } = useLocation(); // Get form data passed from Home component
    const navigate = useNavigate();  // To navigate back for editing

    const [formData, setFormData] = useState(state); // Store data in local state
    const [isViewMode, setIsViewMode] = useState(false); // Toggle view mode

    if (!formData) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#F1F1F1]">
                <h1 className="text-xl font-semibold text-red-500">No data found!</h1>
            </div>
        );
    }

    // Handle delete
    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete the data?")) {
            setFormData(null);
        }
    };

    // Handle edit
    const handleEdit = () => {
        navigate("/", { state: formData }); // Pass data back to Home for editing
    };

    // Handle view toggle
    const handleView = () => {
        setIsViewMode(!isViewMode);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-[#F9FAFB]">
            <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Submitted Details</h1>

                {/* Display Data */}
                <div className="space-y-3 text-gray-700">
                    <div><strong>Name:</strong> {formData.name}</div>
                    <div><strong>Full Name:</strong> {formData.fullname}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    <div><strong>Phone:</strong> {formData.phone}</div>
                    <div><strong>Gender:</strong> {formData.gender}</div>

                    {/* Toggle additional view */}
                    {isViewMode && (
                        <div className="bg-gray-100 p-3 rounded-lg mt-3">
                            <p><strong>Password:</strong> {formData.password}</p>
                            <p><strong>Confirm Password:</strong> {formData.confirmpassword}</p>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-6 gap-3">
                    <button
                        onClick={handleEdit}
                        className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-lg transition"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleView}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
                    >
                        {isViewMode ? "Hide" : "View"}
                    </button>
                    <button
                        onClick={handleDelete}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Result;
