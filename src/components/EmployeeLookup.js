import { useState } from "react";

function EmployeeLookup() {

  const [query, setQuery] = useState("");

  return (
    <div className="flex-align-top">
      <h2 className="title">Employee Lookup</h2>
      <input id="search" className="mb3" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name, department, or ID"/> 

      {query && <p>No employee found.</p>}
    </div>
  );
}

export default EmployeeLookup;
