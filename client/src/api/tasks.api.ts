import axios from "axios";
import { Task } from "../types/types";

export const getTasksRequest = async () =>
  await axios.get("https://todo-mysql-crud.herokuapp.com/tasks");

export const createTaskRequest = async (task: Task) =>
  await axios.post("https://todo-mysql-crud.herokuapp.com/tasks", task);

export const deleteTaskRequest = async (id: any) =>
  await axios.delete(`https://todo-mysql-crud.herokuapp.com/tasks/${id}`);

export const getTaskRequest = async (id: any) =>
  await axios.get(`https://todo-mysql-crud.herokuapp.com/tasks/${id}`);

export const updateTaskRequest = async (id: number, newFields: Task) => 
  await axios.put(`https://todo-mysql-crud.herokuapp.com/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id: number, done: any) =>
  await axios.put(`https://todo-mysql-crud.herokuapp.com/tasks/${id}`, {done},);
