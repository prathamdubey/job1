import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Link , Outlet} from 'react-router-dom'


function SideNav() {
  const navigate = useNavigate();

  

  
  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/AdminDash")
      .then((result) => {
        console.log(result);
        if (result.data === "access") {
          navigate("/AdminHome");
          console.log(result);
        }else if(result.data === "denied"){
          navigate("/Home");
        }
      })
      .catch((err) => console.log(err));
  };
 handleSubmit

  return (
    <div>
      <nav className="flex flex-col  items-center h-screen w-60  bg-gray-600 p-5  fixed">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-5">
            <p className="text-white font-semibold">John Doe</p>
          </div>
        </div>

        <div className="flex flex-col justify-between h-[90vh] ">
          <ul className='flex flex-col justify-evenly h-[40%] gap-1 text-lg p-2  '>
            <Link to="Database"  className="text-white">Database</Link>
            <Link to="AdminDash" className="text-white">Job Listed</Link>
            <li className="text-white">Responses</li>
          </ul>
          <button className=" bg-red-500 text-white px-4 rounded-full ">
            Logout
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default SideNav;
