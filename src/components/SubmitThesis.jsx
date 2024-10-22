import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique confirmation ID

const SubmitThesis = () => {
  // State to store form data and confirmation ID
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    abstract: "",
    file: null,
  });
  const [confirmationId, setConfirmationId] = useState(null); // State to track confirmation ID
  const [isModal, setIsModal] = useState(false);
  const [retrievedData, setRetrievedData] = useState(null); // State to hold retrieved data for tracking

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique confirmation ID
    const generatedId = uuidv4(); 
    setConfirmationId(generatedId);

    // Save form data and confirmation ID in local storage
    localStorage.setItem('submission_' + generatedId, JSON.stringify(formData));

    // Show confirmation to user
    alert(`Your submission was successful! Confirmation ID: ${generatedId}`);
  };

  // Function to retrieve submission data by confirmation ID
  const handleRetrieveSubmission = (id) => {
    const savedData = localStorage.getItem('submission_' + id);
    if (savedData) {
      setRetrievedData(JSON.parse(savedData));
    } else {
      alert("No submission found for the provided Confirmation ID.");
    }
  };

  // Open the modal when the component renders
  useEffect(() => {
    setIsModal(true);
  }, []);

  // Handle modal close
  const handleCloseModal = () => {
    setIsModal(false);
  };

  return (
    <>
      {isModal && (
        <div className="container">
          <dialog open id="my_modal_1" className="modal">
            <div className="modal-box bg-slate-800 border-2">
              <h3 className="font-bold text-2xl text-center">Submission Guidelines</h3>
              <ul className="py-4 list-disc list-inside text-lg">
                <li>Ensure the thesis title is concise and descriptive.</li>
                <li>Include the author's full name and contact information.</li>
                <li>Provide the year of submission accurately.</li>
                <li>Write a clear and informative abstract (150-300 words).</li>
                <li>Upload the thesis in PDF format, ensuring it is under 10MB.</li>
                <li>Use the provided templates for formatting consistency.</li>
                <li>Review your thesis for spelling and grammar before submission.</li>
                <li>Only submit original work that follows ethical guidelines.</li>
                <li>Fill in all mandatory fields in the submission form.</li>
              </ul>
              <div className="modal-action flex items-center justify-center">
                <button className="btn  btn-primary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </div>
      )}

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-400">Submit Your Thesis</h2>

        {/* Download Template Section */}
        <div className="mt-6 text-center">
          <a
            href="../public/template.pdf" // Update this path to your template's location
            download="Thesis_Template.pdf"
            className="btn btn-primary"
          >
            Download Thesis Template
          </a>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-focus p-6 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50"
          >
            <div className="mb-4">
              <label htmlFor="title" className="block text-white">Thesis Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter thesis title"
                value={formData.title}
                onChange={handleChange}
                className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="author" className="block text-white">Author Name</label>
              <input
                type="text"
                id="author"
                name="author"
                placeholder="Enter your name"
                value={formData.author}
                onChange={handleChange}
                className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="year" className="block text-white">Year</label>
              <input
                type="number"
                id="year"
                name="year"
                placeholder="Enter year of submission"
                value={formData.year}
                onChange={handleChange}
                className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="abstract" className="block text-white">Abstract</label>
              <textarea
                id="abstract"
                name="abstract"
                placeholder="Enter abstract"
                value={formData.abstract}
                onChange={handleChange}
                className="textarea textarea-bordered w-full bg-neutral-focus text-neutral-content"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="file" className="block text-white">Upload Thesis (PDF)</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className="file-input file-input-bordered w-full bg-neutral-focus text-neutral-content"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">Submit Thesis</button>
          </form>

          {/* Display confirmation ID if available */}
          {confirmationId && (
            <div className="mt-4 text-center">
              <p className="text-lg text-green-400">Submission successful! Your confirmation ID: {confirmationId}</p>
            </div>
          )}
        </div>

        {/* Form to retrieve submission data using confirmation ID */}
        <div className="mt-10 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-400">Track Your Submission</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const id = e.target.elements.confirmationId.value;
              handleRetrieveSubmission(id);
            }}
            className="mt-4"
          >
            <div className="mb-4">
              <label htmlFor="confirmationId" className="block text-white">Enter Confirmation ID</label>
              <input
                type="text"
                id="confirmationId"
                name="confirmationId"
                placeholder="Enter your confirmation ID"
                className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">Track Submission</button>
          </form>

          {/* Display retrieved data */}
          {retrievedData && (
            <div className="mt-4 text-white">
              <h4 className="text-xl">Submission Details</h4>
              <p><strong>Title:</strong> {retrievedData.title}</p>
              <p><strong>Author:</strong> {retrievedData.author}</p>
              <p><strong>Year:</strong> {retrievedData.year}</p>
              <p><strong>Abstract:</strong> {retrievedData.abstract}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SubmitThesis;
