import axios from "axios";
import { useState } from "react";


function AdminDash() {

  const[file, setFile] = useState()
  const handleUpload = (e) => {
    const formdata = new FormData()
    formdata.append('file', file)
    axios.post('http://localhost:3001/upload', formdata)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  

  return (
    <div className="flex">
      <div className="fixed w-64">
        
      </div>
      <div className="flex-1 ml-64 mx-auto mt-20">
        <form
          
          className="max-w-lg mx-auto p-6 bg-white rounded shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"

              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jobTitle"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              
              
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jobDescription"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Job Description
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"

              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="logo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Logo
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
              onChange={e => setFile(e.target.files[0])}
              accept="image/*"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              onClick={handleUpload}
              className="w-full bg-blue-500 text-white p-3 rounded-md focus:outline-none hover:bg-blue-600"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminDash;
