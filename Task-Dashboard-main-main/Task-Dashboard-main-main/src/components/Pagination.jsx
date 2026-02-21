import React from "react";
const Pagination = ({ tasksPerPage, totalTasks, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
      <div className="centered-text">Frontend Task Manager</div>
      <div className="centered-footer">
        <h3>
          {" "}
          Crafting dynamic interfaces from design visions, using JSON for
          content, and enabling powerful features like search and filtering
          exemplify the blend of artistry and functionality in modern web
          development.{" "}
        </h3>
      </div>
    </div>
  );
};

export default Pagination;
