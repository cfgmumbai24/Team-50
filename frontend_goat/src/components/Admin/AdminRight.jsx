import React from "react";
import CreateFamilyForm from "./CreateNewFamily";
import CreateFellowForm from "./CreateFellow";
import FellowFamilyAssignment from "./AssignFamilyToFellow"
import CreateGoatForm from "./AddGoat";
const AdminRight = ({ selectedItem }) => {
  const renderContent = () => {
    switch (selectedItem) {
      case "Create new Fellow":
            return <div>
            <CreateFellowForm></CreateFellowForm>
        </div>;
      case "Create new Family":
        return (
          <div>
            <CreateFamilyForm></CreateFamilyForm>
          </div>
        );
      case "Assign a Family to Fellow":
        return <div><FellowFamilyAssignment></FellowFamilyAssignment></div>;
      case "Add a new Goat to inventory":
        return <div><CreateGoatForm></CreateGoatForm></div>;
      case "Assign a Goat to a family":
        return <div>Assign a Goat to a family form goes here</div>;
      case "View Fellows":
        return <div>List of Fellows goes here</div>;
      default:
        return <div>Select an option from the left menu</div>;
    }
  };

  return <div className="bg-white p-5 rounded-md">{renderContent()}</div>;
};

export default AdminRight;
