import { useState } from 'react';
import { FaEdit, FaPlusSquare, FaBars, FaTimes } from "react-icons/fa";

function Project() {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility
  const [searchTerm, setSearchTerm] = useState("");
  const projects = [
    { id: 1, name: "Project 1", description: "Description 1", date: "Jun 10, 2024", time: "9:41 AM" },
    { id: 2, name: "Project 2", description: "Description 2", date: "Jun 11, 2024", time: "10:41 AM" },
    { id: 3, name: "Project 3", description: "Description 3", date: "Jun 12, 2024", time: "11:41 AM" },
  ]; // You can replace this with actual project data

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Function to highlight matching text
  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) => 
      part.toLowerCase() === query ? <span key={index} className="bg-yellow-300">{part}</span> : part
    );
  };

  // Function to handle the close button click
  const handleClose = () => {
    setIsVisible(false);
  };

  // Render nothing if the project component is not visible
  if (!isVisible) {
    return null;
  }

  return (
    <div className='flex flex-col w-[820px] h-[100vh] p-6 border-r border-[#1E1E1E69]'>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Project</h1>
        </div>

        <div className='flex flex-col'>
          <button className="flex flex-row-reverse mb-[10px] text-gray-500 hover:text-black p-1" onClick={handleClose}>
            <FaTimes />
          </button>
          <button 
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange} 
            className="flex items-center bg-[#C0E888] text-black px-4 py-2 rounded-full hover:shadow-lg hover:shadow-indigo-500/40">
            <FaPlusSquare className="mr-[10px]" />Add New Project
          </button>
          
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-4 mb-6 border border-black rounded-full">
        <button className="ml-[15px]">
          <FaBars />
        </button>
        <input
          type="text"
          placeholder="Search Project"
          className="flex-grow p-2 border rounded-lg focus:outline-none"
        />
        <button className="p-2 border rounded-full">
         
        </button>
      </div>

      {/* Project List */}
      <div className="space-y-4">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="flex items-center border border-[#73C400] rounded-lg p-4 hover:shadow-lg hover:shadow-indigo-500/40">
              <img
                src="src/assets/layer1.png" // replace with the actual image path
                alt="Project"
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="flex flex-col pl-4 flex-grow">
                <h2 className="text-ml font-semibold">{project.name}</h2>
                <p className="text-gray-500">{project.description}</p>
                <div className="flex space-x-2 text-sm text-gray-400">
                  <span>{project.date}</span>
                  <span>{project.time}</span>
                </div>
              </div>
              <button className="p-2 text-gray-600 hover:text-black">
                <FaEdit />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No projects found.</p>
        )}
      </div>
    </div>
  );
}

export default Project;
