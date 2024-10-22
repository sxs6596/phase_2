import React, { useState } from 'react';

const Search = () => {
  // State to store search input values
  const [searchInputs, setSearchInputs] = useState({
    title: '',
    author: '',
    year: '',
    keywords: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchInputs({
      ...searchInputs,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the search query with the searchInputs state here
    console.log("Searching for:", searchInputs);
    // You can use searchInputs to perform a search, e.g., API call or filtering data
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-400">Search Theses</h2>
      <div className="mt-10 max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-white">Search by Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter thesis title..."
              value={searchInputs.title}
              onChange={handleChange}
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-white">Search by Author</label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Enter author name..."
              value={searchInputs.author}
              onChange={handleChange}
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="year" className="block text-white">Search by Year</label>
            <input
              type="number"
              id="year"
              name="year"
              placeholder="Enter year..."
              value={searchInputs.year}
              onChange={handleChange}
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="keywords" className="block text-white">Search by Keywords</label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              placeholder="Enter keywords..."
              value={searchInputs.keywords}
              onChange={handleChange}
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">Search</button>
        </form>
      </div>
    </section>
  );
};

export default Search;
