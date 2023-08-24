import { useNavigate } from "react-router-dom";
import config from "../config";

function EmployeeList(props) {
    
    return (
        <div className="employee-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Emp Status</th>
                        <th>Email</th>
                        <th>Document</th>
                    </tr>
                </thead>
                <tbody>
                {
                props.data.map((emp, empIdx) =>
                    <tr key={`emp_${empIdx}`}>
                        <td>{emp.id}</td>
                        <td>{emp.firstname}</td>
                        <td>{emp.lastname}</td>
                        <td>{emp.department}</td>
                        <td>{emp.empStatus}</td>
                        <td>{emp.email}</td>
                        <td className="action"><a href={`${config.apiUrl}/${emp.documentURL}`}><i class="fa-solid fa-download"></i> Download</a></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;