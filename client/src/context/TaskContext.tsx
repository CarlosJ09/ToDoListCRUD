import { createContext, useContext, useState } from "react";
import { children, Task } from "../types/types";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  updateTaskRequest,
  getTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.api";

type ContextProvider = {
  tasks: Task[];
  loadTasks: () => Promise<void>;
  deleteTask: (id: any) => Promise<void>;
  createTask: (task: Task) => Promise<void>;
  getTask: (id: any) => Promise<any>;
  updateTask: (id: any, newFields: any) => Promise<any>;
  toggleTaskDone: (id: any) => Promise<any>;
};

const contextDefaultValues: ContextProvider = {
  tasks: [],
  loadTasks: async () => {},
  deleteTask: async () => {},
  createTask: async () => {},
  getTask: async () => {},
  updateTask: async () => {},
  toggleTaskDone: async () => {},
};

export const TaskContext = createContext<ContextProvider>(contextDefaultValues);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskContextProvider");
  } else {
    return context;
  }
};

export const TaskContextProvider = ({ children }: children) => {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

  const createTask = async (task: Task) => {
    try {
      const response = await createTaskRequest(task);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id: any) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const getTask = async (id: number) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id: number, newFields: Task) => {
    try {
      const response = await updateTaskRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTaskDone = async (id: number) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound?.done == false ? true : false);
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, loadTasks, createTask, deleteTask, getTask, updateTask, toggleTaskDone}}
    >
      {children}
    </TaskContext.Provider>
  );
};
