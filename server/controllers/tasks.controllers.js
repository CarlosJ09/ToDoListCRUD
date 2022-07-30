import { pool } from "../db.js";

//Getting tasks
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

//Getting a task
export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "task no found" });
    } else {
      res.json(result[0]);
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

//Creating a new Task
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, description) VALUES (?, ?)",
      [title, description]
    );
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

//Updating a task
export const updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

//Deleteing a task
export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      res.status(404).json({ message: "task no found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
