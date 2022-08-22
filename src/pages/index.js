import Layout from "../components/Layout.js";
import Task from "../components/task.js";
import { useTaskContext } from "../context/TaskContext.js";

const Home = () => {
  const { state } = useTaskContext();

  return (
    <>
      <Layout>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-5 gap-4">
          {state.tasks && state.tasks.length === 0 ? (
            <li>
              <h2>0 tasks</h2>
            </li>
          ) : (
            state.tasks.map((element, index) => {
              return (
                <li key={index}>
                  <Task
                    title={element.title}
                    description={element.description}
                    id={element.id}
                  />
                </li>
              );
            })
          )}
        </ul>
      </Layout>
    </>
  );
};

export default Home;
