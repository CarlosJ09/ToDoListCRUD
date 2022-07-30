import { Formik, Form } from "formik";
import { Task } from "../types/types";
import { useTask } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTask();

  const [tasks, setTasks] = useState<Task>({
    title: "",
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task: Task = await getTask(params.id);
        console.log(task);

        setTasks({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={tasks}
        enableReinitialize={true}
        onSubmit={async (values: Task, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }

          navigate("/");

          setTasks({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-md rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold text-center mb-2">{params.id ? "Edit Task" : "Create Task"}</h1>

            <label className="block py-1">Title</label>
            <input
              type="text"
              name="title"
              className="px-2 py-1 rounded-sm w-full"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />

            <label className="block py-1 ">Description</label>
            <textarea
              name="description"
              placeholder="Write a description"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="submit" disabled={isSubmitting} className="block bg-indigo-500 px-2 py-1 mt-4 text-white w-full rounded-md">
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
