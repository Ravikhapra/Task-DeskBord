import React from "react";
import Pagination from "./Pagination";

const TaskList = ({
  tasks,
  selectedTab,
  currentPage,
  tasksPerPage,
  paginate,
}) => {
  const filteredTasks = tasks.filter((task) =>
    selectedTab === "All" ? true : task.status === selectedTab
  );

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <div>
      <ul>
        {currentTasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>

      <Pagination
        tasksPerPage={tasksPerPage}
        totalTasks={filteredTasks.length}
        paginate={paginate}
      />
    </div>
  );
};

export default TaskList;
