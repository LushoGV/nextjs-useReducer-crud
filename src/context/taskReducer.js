export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "UPDATE_TASK":
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.description = action.payload.description;
        }
        return task;
      });
      return {
        tasks: updatedTasks,
      };
  }

  return state;
};
