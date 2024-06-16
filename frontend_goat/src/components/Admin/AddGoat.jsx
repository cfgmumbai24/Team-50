import React, { useEffect, useState } from "react";

const CreateGoatForm = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [vaccination, setVaccination] = useState("");
  const [decease, setDecease] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setError("");
      setSuccess("");
    }, 3000);
  }, [error, success]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/post/addgoat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ height, weight, gender, vaccination, decease }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess(`New Goat created with ID: ${data._id}`);
        setHeight("");
        setWeight("");
        setGender("");
        setVaccination("");
        setDecease("");
      } else {
        setError("Error creating goat. Please try again.");
      }
    } catch (err) {
      setError("Error creating goat. Please try again.");
      console.error(err);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md shadow-blue-300 p-4 my-5">
        <div className="pb-2 text-lg text-blue-500 font-semibold">
          Create Goat
        </div>
        <input
          type="text"
          className="w-full mb-2 px-4 py-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          className="w-full mb-2 px-4 py-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          className="w-full mb-2 px-4 py-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Gender (M/F)"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="text"
          className="w-full mb-2 px-4 py-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Vaccination Status"
          value={vaccination}
          onChange={(e) => setVaccination(e.target.value)}
        />
        <input
          type="text"
          className="w-full mb-2 px-4 py-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Decease Status"
          value={decease}
          onChange={(e) => setDecease(e.target.value)}
        />
        <div className="flex justify-between items-center mt-4">
          <button
            className={`px-4 py-2 rounded-md text-white shadow-md font-semibold ${
              height.trim() &&
              weight.trim() &&
              gender.trim() &&
              vaccination.trim() &&
              decease.trim()
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleSubmit}
            disabled={
              !height.trim() ||
              !weight.trim() ||
              !gender.trim() ||
              !vaccination.trim() ||
              !decease.trim()
            }
          >
            Create Goat
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-500">{success}</div>}
      </div>
    </div>
  );
};

export default CreateGoatForm;
