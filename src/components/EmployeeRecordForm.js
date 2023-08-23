import { useState } from "react";

function EmployeeRecordhtmlForm(props) {

    const [selectedFile, setSelectedFile] = useState("");

    const updateFileName = (e) => {
        let pathSegments = e.target.value.split("\\");
        console.log(pathSegments);
        let filename = pathSegments[pathSegments.length-1];
        setSelectedFile(filename);
    };

    const handlehtmlForm = (e) => {
        e.preventDefault();

    };

    return (
        <form>
            <h2 className="title">Employee Record</h2>

            <div className="fieldset">
            <label htmlFor="f_fname">First Name</label>
            <input id="f_fname" type="text"/>
            </div>

            <div className="fieldset">
            <label htmlFor="f_lname">Last Name</label>
            <input id="f_lname" type="text"/>
            </div>

            <div className="fieldset">
            <label htmlFor="f_id">ID</label>
            <input id="f_id" type="text"/>
            </div>

            <div className="fieldset">
            <label htmlFor="f_dept">Department</label>
            <input id="f_dept" type="text"/>
            </div>

            <div className="fieldset">
            <label htmlFor="f_status">Employment Status</label>
            <select id="f_status">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contractual</option>
            </select>
            </div>

            <div className="fieldset">
            <label htmlFor="f_email">Email</label>
            <input id="f_email" type="email"/>
            </div>

            <div className="fieldset">
                <label htmlFor="f_doc">Document</label>
                <div className="file-upload inline-block">
                    <input id="f_doc" type="file" className="mb1" onChange={(e) => updateFileName(e)}/>
                    {selectedFile && <p><strong>File selected: </strong>{selectedFile}</p>}
                </div>
            </div>

            <button className="button" type="submit" onClick={handlehtmlForm}>Submit</button>
        </form>
    );
}

export default EmployeeRecordhtmlForm;