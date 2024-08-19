
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query); 
    };

    return (
        <div>
            <input
                className="border-2 border-black p-2 rounded-sm"
                id="search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search news here"
            />
            <button
                className="text-white font-semibold border border-black bg-green-700 rounded-lg p-1"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
