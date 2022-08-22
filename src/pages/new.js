import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import { useTaskContext } from "../context/TaskContext.js";
import Layout from "../components/Layout.js";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const { state, addTask, updateTask } = useTaskContext();
  const { push, query } = useRouter();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title !== "" && task.description !== "") {
      if (!query.id) {
        addTask(task);
      } else {
        updateTask({ ...task, id: query.id });
      }
      push("/");
    }
  };

  useEffect(() => {
    if (query.id) {
      const taskFound = state.tasks.find((task) => task.id === query.id);
      setTask({ title: taskFound.title, description: taskFound.description });
    }
  }, []);

  return (
    <Layout>
      <form
        className="flex flex-col justify-center items-center shadow-sm border-slate-800 border-2 rounded-md p-4 max-w-lg w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="font-semibold text-xl mb-3 mt-3">
          {query.id ? "Update Task" : "Create Task"}
        </h1>
        <div className="p-2 w-full my-4 flex flex-col">
          <span className="font-semibold text-lg mb-2">Title</span>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
            value={task.title}
            className="outline-none px-2 py-3 border-2 border-slate-800 rounded-sm bg-slate-800"
          />
        </div>
        <div className="p-2 w-full mb-4 flex flex-col">
          <span className="font-semibold text-lg mb-2">Description</span>
          <textarea
            placeholder="description"
            name="description"
            onChange={handleChange}
            value={task.description}
            className="outline-none px-2 py-3 border-2 border-slate-800 rounded-sm bg-slate-800"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Save"
          className="bg-green-400 text-white font-semibold text-xl py-3 px-8 rounded-sm mt-3 mb-4 hover:cursor-pointer hover:bg-green-500 disabled:bg-opacity-50"
        />
      </form>
    </Layout>
  );
};

export default TaskForm;
