import React, { useState, useEffect } from "react";

const FellowFamilyAssignment = () => {
  const [fellows, setFellows] = useState([]);
  const [selectedFellow, setSelectedFellow] = useState(null);
  const [unassignedFamilies, setUnassignedFamilies] = useState([]);

  useEffect(() => {
    // Fetch fellows and unassigned families on component mount
    const fetchData = async () => {
      try {
        const fellowsResponse = await fetch(
          `http://localhost:8080/api/get/allfellows`
        );
        const fellowsData = await fellowsResponse.json();
        setFellows(fellowsData);

        const familiesResponse = await fetch(
          `http://localhost:8080/api/get/allfamilies`
        );
        const familiesData = await familiesResponse.json();
        console.log(familiesData);
        const unassignedFamilies = familiesData.filter(
          (family) => !family.fellowId
        );
        setUnassignedFamilies(unassignedFamilies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleFellowChange = (event) => {
    setSelectedFellow(
      fellows.find((fellow) => fellow._id === event.target.value)
    );
  };

  const handleAssignFamily = async (familyId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/post/assignfamily`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fellowId: selectedFellow._id, familyId }),
        }
      );
      console.log(await response.json())
      if (response.ok) {
        const updatedFamilies = unassignedFamilies.filter(
          (family) => family._id !== familyId
        );
        setUnassignedFamilies(updatedFamilies);
      } else {
        console.error("Error assigning family p:", response.status);
      }
    } catch (error) {
      console.error("Error assigning family:", error);
    }
  };

  return (
    <div>
      <h2>Assign Family to Fellow</h2>
      <div>
        <label htmlFor="fellow-select">Select a Fellow:</label>
        <select id="fellow-select" onChange={handleFellowChange}>
          <option value="">Select a Fellow</option>
          {fellows.map((fellow) => (
            <option key={fellow._id} value={fellow._id}>
              {fellow.name}
            </option>
          ))}
        </select>
      </div>
      {selectedFellow && (
        <div>
          <h3>Unassigned Families</h3>
          <ul>
            {unassignedFamilies.map((family) => (
              <li key={family._id} className="text-white bg-green">
                {family.name}{" "}
                <button onClick={() => handleAssignFamily(family._id)}>
                  Assign
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FellowFamilyAssignment;
