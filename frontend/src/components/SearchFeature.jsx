import React, { useState } from "react";
import "../styles/SearchFeature.css";
import { data } from "../data.js";

function SearchFeature() {
  const [search, setSearch] = useState('');
  console.log(search);

  // Function to generate highlighted text
  const highlightSearchText = (text) => {
    if (!search) {
      return text;
    }

    const regex = new RegExp(`(${search})`, 'gi');
    return text.split(regex).map((part, index) => (
      regex.test(part) ? <span key={index} className="highlighted">{part}</span> : part
    ));
  };

  return (
    <div className="search-feature">
      <h1>Search Feature</h1>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Doctors Here"
      />

      <div className="result-table-container">
        <table className="result-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialization</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{highlightSearchText(item.name)}</td>
                <td>{highlightSearchText(item.Specialization)}</td>
                <td>{highlightSearchText(item.email)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchFeature;
