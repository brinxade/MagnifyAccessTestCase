import { useEffect, useState } from "react";
import config from "../config";
import EmployeeList from "./EmployeeList";

function EmployeeLookup() {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filterEmpStatus, setFilterEmpStatus] = useState("");
  const [isFirstSearch, setIsFirstSearch] = useState(true);

  const search = async() => {
    setIsFirstSearch(false);

    let req = await fetch(`${config.apiUrl}/?q=${query}&empStatus=${filterEmpStatus}`);
    let json = await req.json();

    console.log(json);

    setData(json.data);
  };

  return (
    <div className="flex-align-top">
      <h2 className="title">Employee Lookup</h2>
      <div className="toolbar d-flex mb3">
      <div className="inline-block flex-column mr1">
          <label for="search">Search</label>
          <input id="search" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name, department or ID" onKeyDown={(e) => e.key === "Enter" && search()}/> 
        </div>
        <div className="inline-block flex-column">
          <label for="filter_empStatus">Emp. Status</label>
          <select id="filter_empStatus" className="mr1 inline-block w-min" value={filterEmpStatus} onChange={(e) => setFilterEmpStatus(e.target.value)}>
            <option value="">Any</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contractual">Contractual</option>
          </select>
        </div>
        <button className="button" onClick={search}>Search</button>
      </div>

      {data.length==0 && !isFirstSearch && <p>No employee found.</p>}

      {data.length>0 && <EmployeeList data={data}/>}
    </div>
  );
}

export default EmployeeLookup;
