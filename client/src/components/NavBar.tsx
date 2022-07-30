import { Link } from "react-router-dom";
import TaskForm from "../pages/TaskForm";

function NavBar() {
  return (
    <div className="bg-neutral-800 flex justify-between px-10 py-4">

      <Link to="/" className="text-lg text-white font-bold">
        <h1>To-Do List</h1>
      </Link>

      <ul className="flex gap-x-1">
        <li className="link1">
          <Link to="/" className="text-sm text-white px-2 py-1 font-bold">Home</Link>
        </li>
        <li className="link2">
          <Link to="/new" className="text-sm text-teal-300 px-2 py-1 font-bold">Create Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
