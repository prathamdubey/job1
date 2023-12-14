import {Link} from "react-router-dom"
const navbar = () => {
  return (
    <>
      <nav className="bg-gray-700 text-white">
        <ul className="flex justify-between px-80 py-5 ">
          <div>
            <li>MetalTroop</li>
          </div>
          <div className="flex gap-8">
            <li><Link to="./Home">Home</Link></li>
            <li><Link to="./Services">Services</Link></li>
            <li><Link to="./Contact">Contact</Link></li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
