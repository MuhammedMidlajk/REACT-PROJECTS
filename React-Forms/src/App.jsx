import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('Data'));
    if (storedData) setFormData(storedData);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
 
    localStorage.setItem('Data', JSON.stringify(formData));
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-[#F1F1F1]">
      <h1 className="text-xl font-semibold mb-4">SIGN UP</h1>
      <div className="max-w-md p-4 rounded-[8px] shadow-md bg-white">
        <form onSubmit={handleSubmit}>
          {['name', 'fullName', 'email', 'phone', 'password', 'confirmPassword'].map((field) => (
            <div className="mb-3" key={field}>
              <label className="block text-sm font-medium">{field}</label>
              <input
                className="w-[350px] p-1 rounded bg-[#F1F1F1]"
                type={field.includes('password') ? 'password' : (field === 'email' ? 'email' : (field === 'phone' ? 'number' : 'text'))}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="mb-3 flex items-center gap-3">
            <label className="block text-sm font-medium">Gender:</label>
            {['male', 'female'].map((genderOption) => (
              <div className="flex items-center gap-2" key={genderOption}>
                <input
                  type="radio"
                  name="gender"
                  value={genderOption}
                  id={genderOption}
                  className="border p-1 rounded"
                  checked={formData.gender === genderOption}
                  onChange={handleChange}
                />
                <label htmlFor={genderOption}>{genderOption.charAt(0).toUpperCase() + genderOption.slice(1)}</label>
              </div>
            ))}
          </div>

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

export default App;
