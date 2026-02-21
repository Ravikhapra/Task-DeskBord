import { useEffect, useState } from "react";
import TabSelector from "./components/TabSelector";
import data from "./tasks.json";
import SearchFilter from "./components/SearchFilter";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(data.tasks);
  const [selectedTab, setSelectedTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(5);

  useEffect(() => {
    const filteredTasks = data.tasks
      .filter((task) =>
        selectedTab === "All" ? true : task.status === selectedTab
      )
      .filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    setTasks(filteredTasks);
    setCurrentPage(1);
  }, [selectedTab, searchTerm]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <div className="footer">
          {" "}
          Juno Task Manager
          <TabSelector selectedTab={selectedTab} onSelectTab={setSelectedTab} />
        </div>
        <SearchFilter onSearch={setSearchTerm} />
        <TaskList
          tasks={tasks}
          selectedTab={selectedTab}
          currentPage={currentPage}
          tasksPerPage={tasksPerPage}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default App;
