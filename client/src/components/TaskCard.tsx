import { Props, Task } from "../types/types";
import { useTask } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

function TaskCard({ task }: Props) {
  const { deleteTask, toggleTaskDone } = useTask();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-md font-bold">{task.title}</h2>
        <span>{task.done == true ? "✅" : "❌"}</span>
      </header>
      <p className="text-sm mb-4">{task.description}</p>
      <span className="text-md">
        Created Date: {task.createAt?.slice(0, -14)}
      </span>
      <div className="flex gap-x-1 mt-4">
        <button
          className="bg-red-500 px-2 py-1 text-white w-max rounded-sm"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-800 px-2 py-1 text-white w-max rounded-sm"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          id="toggle"
          className="bg-teal-800 px-2 py-1 text-white w-max rounded-sm"
          onClick={() => handleDone()}
        >
          {task.done == true ? "Pending" : "Done"}
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
