import React, { useState } from "react";
import "../styles/SearchFeature.css";
import { data } from "../data.js";

function SearchFeature() {
  const [search, setSearch] = useState('')
  console.log(search)

    
  return (
    <div className="search-feature">
      <h1>Search Feature</h1>
      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Doctors Here" />

      <div className="result-table-container">
        <table className="result-table">
          <thead>
            <tr>
              <th> Name</th>
              <th>Specialization</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item) => {
                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
            }).map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.Specialization}</td>
                <td>{item.email}</td>
              </tr>
            ))}
            {/* Example row, you can dynamically render rows based on search results */}

            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchFeature;