import React, { useState } from "react";

const AdminLeft = ({selectedItem,setSelectedItem}) => {


  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="p-5 bg-white rounded-md flex flex-col gap-2">
      <div
        className={`p-2 rounded-md bg-white cursor-pointer ${
          selectedItem === "Create new Fellow" ? "bg-green-300" : ""
        }`}
        onClick={() => handleItemClick("Create new Fellow")}
      >
        Create new Fellow
      </div>
      <div
        className={`p-2 rounded-md bg-white cursor-pointer ${
          selectedItem === "Create new Family" ? "bg-green-300" : ""
        }`}
        onClick={() => handleItemClick("Create new Family")}
      >
        Create new Family
      </div>
      <div
        className={`p-2 rounded-md bg-white cursor-pointer ${
          selectedItem === "Assign a Family to Fellow" ? "bg-green-300" : ""
        }`}
        onClick={() => handleItemClick("Assign a Family to Fellow")}
      >
        Assign a Family to Fellow
      </div>
      <div
        className={`p-2 rounded-md bg-white cursor-pointer ${
          selectedItem === "Add a new Goat to inventory" ? "bg-green-300" : ""
        }`}
        onClick={() => handleItemClick("Add a new Goat to inventory")}
      >
        Add a new Goat to inventory
      </div>
      <div
        className={`p-2 rounded-md bg-white cursor-pointer ${
          selectedItem === "Assign a Goat to a family" ? "bg-green-300" : ""
        }`}
        onClick={() => handleItemClick("Assign a Goat to a family")}
      >
        Assign a Goat to a family
      </div>
      <div
        className={`p-2 rounded-md bg-white cursor-pointer ${
          selectedItem === "View Fellows" ? "bg-green-300" : ""
        }`}
        onClick={() => handleItemClick("View Fellows")}
      >
        View Fellows
      </div>
    </div>
  );
};

export default AdminLeft;
