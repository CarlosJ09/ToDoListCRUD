import axios from "axios";
import { Task } from "../types/types";

export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/tasks");

export const createTaskRequest = async (task: Task) =>
  await axios.post("http://localhost:4000/tasks", task);

export const deleteTaskRequest = async (id: any) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);

export const getTaskRequest = async (id: any) =>
  await axios.get(`http://localhost:4000/tasks/${id}`);

export const updateTaskRequest = async (id: number, newFields: Task) => 
  await axios.put(`http://localhost:4000/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id: number, done: any) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, {done},);
