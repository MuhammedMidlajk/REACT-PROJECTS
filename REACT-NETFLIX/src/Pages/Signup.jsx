import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Signup() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sign Up Data:", formData);
        // Add your API call or logic here to handle user registration
    }
    return (
     
        <div  className='font-bold w-[150vw] md:w-full'>
            <Navbar/>
            <div className="flex items-center justify-center min-h-screen bg-black">
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your username"
                                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm  sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 text-white bg-black  rounded-md focus:outline-none focus:ring-2 "
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-500 mt-4">
                        Already have an account? <a href="" className="text-indigo-600 hover:underline">Log In</a>
                    </p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Signup
