import { useRouter } from "next/router";
import { useTaskContext } from "../context/TaskContext";

const Task = ({ title, description, id }) => {
  const { push } = useRouter();
  const { deleteTask } = useTaskContext();

  return (
    <div
      onClick={() => push(`/edit/${id}`)}
      className="bg-slate-800 p-6 shadow-sm min-h-[200px] flex flex-col justify-between hover:cursor-pointer hover:bg-slate-700"
    >
      <div className="flex flex-col">
        <h2 className="mb-6 text-lg font-semibold">{title}</h2>
        <p className="font-semibold">{description}</p>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-red-600 w-24 py-2 mr-2 font-semibold hover:bg-red-700"
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(id);
          }}
        >
          clear
        </button>
      </div>
    </div>
  );
};

export default Task;
