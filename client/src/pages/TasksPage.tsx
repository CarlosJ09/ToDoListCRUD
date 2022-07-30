import { useEffect } from "react";
import { Task } from "../types/types";
import TaskCard from "../components/TaskCard";
import { useTask } from "../context/TaskContext";
import '../App.css'

function TaskPage() {
  const { tasks, loadTasks } = useTask();

  useEffect(() => {
    loadTasks();
  }, []);

  function noTask() {
    if (tasks.length == 0) return <h1 className="text-5xl text-white font-bold text-center">No tasks yet</h1>;
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center my-10">Tasks</h1>

      <div className="cards grid grid-cols-3 gap-4">
        {tasks.map((task: Task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default TaskPage;
