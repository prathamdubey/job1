import React from 'react';

function SideNav() {
  return (
    <div>
      <nav className="h-screen w-80  bg-gray-600 p-4 rounded-r-[40px]">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-3">
            <p className="text-white font-semibold">John Doe</p>
          </div>
        </div>

        <ul className='mt-52 text-lg p-auto '>
          <li  className="text-white mb-2">Jobs Listed</li>
          <li className="text-white mb-2">Responses</li>
        </ul>

        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full">
          Logout
        </button>
      </nav>
    </div>
  );
}

export default SideNav;
