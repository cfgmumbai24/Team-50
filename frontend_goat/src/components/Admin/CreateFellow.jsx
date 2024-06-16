import React, { useEffect, useState } from "react";

const CreateFellowForm = () => {
  const [name, setName] = useState("");
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
      const response = await fetch(
        "http://localhost:8080/api/post/createFellow",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSuccess(`New fellow created with ID: ${data._id}`);
        setName("");
      } else {
        setError("Error creating fellow. Please try again.");
      }
    } catch (err) {
      setError("Error creating fellow. Please try again.");
      console.error(err);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md shadow-blue-300 p-4 my-5">
        <div className="pb-2 text-lg text-blue-500 font-semibold">
          Create Fellow
        </div>
        <input
          type="text"
          className="w-full mb-2 px-4 py-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Name of Fellow"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className="flex justify-between items-center mt-4">
          <button
            className={`px-4 py-2 rounded-md text-white shadow-md font-semibold ${
              name.trim()
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleSubmit}
            disabled={!name.trim()}
          >
            Post
          </button>
        </div>
        {error ? <div className="text-red-500">${error}</div> : <div></div>}
        {success ? (
          <div className="text-green-500">${success}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default CreateFellowForm;
