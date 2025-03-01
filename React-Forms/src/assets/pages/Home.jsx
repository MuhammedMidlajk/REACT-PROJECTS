// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

// function Home() {
//     const { register, handleSubmit, formState: { errors }, getValues } = useForm();
//     const navigate = useNavigate(); // Initialize useNavigate

//     const onSubmit = (data) => {
//         console.log("Form Data:", data);
//         navigate('/result'); // Navigate only if form is valid
//     };

//     return (
//         <div className="flex justify-center items-center h-screen flex-col bg-[#F1F1F1]">
//             <h1 className='text-xl font-semibold mb-4'>SIGN UP</h1>
//             <div className='max-w-md p-4 rounded-[8px] shadow-md bg-white'>

//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="mb-3">
//                         <label className='block text-sm font-medium'>Name</label>
//                         <input {...register('name', { required: 'Name is required' })} className='w-[350px] p-1 rounded bg-[#F1F1F1] focus:outline-none' type="text" />
//                         {errors.name && <p className="text-red-600 text-xs">{errors.name.message}</p>}
//                     </div>

//                     <div className="mb-3">
//                         <label className='block text-sm font-medium'>Full Name</label>
//                         <input {...register('fullname', { required: 'Full Name is required' })} className='w-[350px] focus:outline-none p-1 rounded bg-[#F1F1F1]' type="text" />
//                         {errors.fullname && <p className="text-red-600 text-xs">{errors.fullname.message}</p>}
//                     </div>

//                     <div className="mb-3">
//                         <label className='block text-sm font-medium'>Email</label>
//                         <input {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })} className='w-[350px] focus:outline-none p-1 rounded bg-[#F1F1F1]' type="email" />
//                         {errors.email && <p className="text-red-600 text-xs">{errors.email.message}</p>}
//                     </div>

//                     <div className="mb-3">
//                         <label className='block text-sm font-medium'>Phone</label>
//                         <input {...register('phone', {
//                             required: 'Phone number is required',
//                             minLength: { value: 8, message: "Number must be at least 8 digits" },
//                             maxLength: { value: 10, message: "Number must be at most 10 digits" }
//                         })} className='w-[350px] p-1 rounded bg-[#F1F1F1] focus:outline-none' type="number" />
//                         {errors.phone && <p className="text-red-600 text-xs">{errors.phone.message}</p>}
//                     </div>

//                     <div className="mb-3">
//                         <label className='block text-sm font-medium'>Password</label>
//                         <input {...register('password', { required: 'Password is required', pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, message: 'Invalid password' } })} className='w-[350px] p-1 rounded bg-[#F1F1F1] focus:outline-none' type="password" />
//                         {errors.password && <p className="text-red-600 text-xs">{errors.password.message}</p>}
//                     </div>

//                     <div className="mb-3">
//                         <label className='block text-sm font-medium'>Confirm Password</label>
//                         <input {...register('confirmpassword', {
//                             required: 'Confirm your password',
//                             validate: (value) => value === getValues("password") || "The passwords do not match"
//                         })} className='w-[350px] p-1 rounded bg-[#F1F1F1] focus:outline-none' type="password" />
//                         {errors.confirmpassword && <p className="text-red-600 text-xs">{errors.confirmpassword.message}</p>}
//                     </div>

//                     <div className="mb-3 flex items-center gap-3">
//                         <label className="block text-sm font-medium">Gender:</label>
//                         <div className="flex items-center gap-2">
//                             <input {...register('gender', { required: 'Gender is required' })} type="radio" value="male" id="male" className="h-3" />
//                             <label htmlFor="male">Male</label>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <input {...register('gender', { required: 'Gender is required' })} type="radio" value="female" id="female" className="h-3" />
//                             <label htmlFor="female">Female</label>
//                         </div>
//                     </div>
//                     {errors.gender && <p className="text-red-600 text-xs -mt-2 mb-3">{errors.gender.message}</p>}

//                     <div className="flex items-center justify-center">
//                         {/* Change Link to Button and handle validation */}
//                         <button type="submit" className="w-full bg-blue-500 text-white p-1 rounded hover:bg-blue-400">
//                             Submit
//                         </button>
//                     </div>
//                 </form>

//             </div>
//         </div>
//     );
// }

// export default Home;







import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Home() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const navigate = useNavigate(); // Initialize useNavigate

    // Function called on form submit
    const onSubmit = (data) => {
        console.log("Form Data:", data);
        navigate('/result', { state: data }); // Navigate to the Result page and pass form data
    };
    
    return (
        <div className="flex justify-center items-center h-screen flex-col bg-[#F1F1F1]">
            <h1 className="text-xl font-semibold mb-4">SIGN UP</h1>
            <div className="max-w-md p-4 rounded-[8px] shadow-md bg-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <div className="mb-3">
                        <label className="block text-sm font-medium">Name</label>
                        <input 
                            {...register('name', { required: 'Name is required' })} 
                            className="w-[350px] p-1 rounded bg-[#F1F1F1] focus:outline-none" 
                            type="text" 
                        />
                        {errors.name && <p className="text-red-600 text-xs">{errors.name.message}</p>}
                    </div>

                    {/* Full Name Field */}
                    <div className="mb-3">
                        <label className="block text-sm font-medium">Full Name</label>
                        <input 
                            {...register('fullname', { required: 'Full Name is required' })} 
                            className="w-[350px] p-1 rounded bg-[#F1F1F1] focus:outline-none" 
                            type="text" 
                        />
                        {errors.fullname && <p className="text-red-600 text-xs">{errors.fullname.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <label className="block text-sm font-medium">Email</label>
                        <input 
                            {...register('email', { 
                                required: 'Email is required', 
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } 
                            })} 
                            className="w-[350px] p-1 rounded bg-[#F1F1F1] focus:outline-none" 
                            type="email" 
                        />
                        {errors.email && <p className="text-red-600 text-xs">{errors.email.message}</p>}
                    </div>

                    {/* Phone Field */}
                    <div className="mb-3">
                        <label className="block text-sm font-medium">Phone</label>
                        <input 
                            {...register('phone', {
                                required: 'Phone number is required',
                                minLength: { value: 8, message: "Number must be at least 8 digits" },
                                maxLength: { value: 10, message: "Number must be at most 10 digits" }
                            })} 
                            className="w-[350px] p-1 rounded bg-[#F1F1F1] focus:outline-none" 
                            type="number" 
                        />
                        {errors.phone && <p className="text-red-600 text-xs">{errors.phone.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <label className="block text-sm font-medium">Password</label>
                        <input 
                            {...register('password', { 
                                required: 'Password is required',
                                pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: 'Password must contain at least one digit, one lowercase letter, one uppercase letter and be at least 8 characters long' }
                            })} 
                            className="w-[350px] p-1 rounded bg-[#F1F1F1] focus:outline-none" 
                            type="password" 
                        />
                        {errors.password && <p className="text-red-600 text-xs">{errors.password.message}</p>}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-3">
                        <label className="block text-sm font-medium">Confirm Password</label>
                        <input 
                            {...register('confirmpassword', {
                                required: 'Please confirm your password',
                                validate: (value) => value === getValues("password") || "The passwords do not match"
                            })} 
                            className="w-[350px] p-1 rounded bg-[#F1F1F1] focus:outline-none" 
                            type="password" 
                        />
                        {errors.confirmpassword && <p className="text-red-600 text-xs">{errors.confirmpassword.message}</p>}
                    </div>

                    {/* Gender Field */}
                    <div className="mb-3 flex items-center gap-3">
                        <label className="block text-sm font-medium">Gender:</label>
                        <div className="flex items-center gap-2">
                            <input {...register('gender', { required: 'Gender is required' })} type="radio" value="male" id="male" className="h-3" />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input {...register('gender', { required: 'Gender is required' })} type="radio" value="female" id="female" className="h-3" />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    {errors.gender && <p className="text-red-600 text-xs -mt-2 mb-3">{errors.gender.message}</p>}

                    {/* Submit Button */}
                    <div className="flex items-center justify-center">
                        <button type="submit" className="w-full bg-blue-500 text-white p-1 rounded hover:bg-blue-400">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;






