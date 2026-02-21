import React from "react";

const TabSelector = ({ selectedTab, onSelectTab }) => {
  const tabs = ["All", "Pending", "Completed"];

  return (
    <div className="tab-selector">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSelectTab(tab)}
          className={selectedTab === tab ? "tab-button active" : "tab-button"}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;
