import { createContext, useContext, useEffect, useReducer } from "react";
import { taskReducer } from "./taskReducer.js";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

let initalState = {
  tasks: [],
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initalState);

  const addTask = (newTask) => {
    dispatch({ type: "ADD_TASK", payload: { ...newTask, id: uuid() } });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const updateTask = (newTask) => {
    dispatch({ type: "UPDATE_TASK", payload: newTask });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  // const addTask = (info) => {
  //   const { title, description } = info;
  //   setTasks([...tasks,{title,description,id: uuid()},]);
  // };

  // const updateTask = (id, newTask) => {
  //   setTasks([...tasks.map((task) => (task.id === id ? { ...task, ...newTask } : task)),]);
  // };

  // const deleteTask = (id) =>
  //   setTasks([...tasks.filter((task) => task.id !== id)]);

  return (
    <TaskContext.Provider value={{ state, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const { state, addTask, updateTask, deleteTask } = useContext(TaskContext);
  return { state, addTask, updateTask, deleteTask };
};
