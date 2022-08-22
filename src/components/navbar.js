import Link from "next/link";
import { useRouter } from "next/router";
import { useTaskContext } from "../context/TaskContext.js";

const Navbar = () => {
  const router = useRouter();
  const { state } = useTaskContext();

  return (
    <div className="flex justify-between w-full px-4 ">
      <div className="flex items-center">
        <Link href="/">
          <a>
            <h1 className="mr-3 text-2xl font-semibold">Tasks App</h1>
          </a>
        </Link>
        <span className="mt-1 font-medium">{state.tasks.length} tasks</span>
      </div>

      <button
        onClick={() => router.push("/new")}
        className="bg-green-400 text-white font-semibold text-lg px-3 py-2 rounded-sm hover:cursor-pointer hover:bg-green-500 "
      >
        Add Task
      </button>
    </div>
  );
};

export default Navbar;
