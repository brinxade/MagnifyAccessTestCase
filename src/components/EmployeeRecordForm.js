import { useRef, useState } from "react";
import config from "../config";

function EmployeeRecordhtmlForm(props) {

    const fileField = useRef(null);

    /* Form Fields */
    const [selectedFile, setSelectedFile] = useState("");
    const [id, setId] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [empStatus, setEmpStatus] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");

    const [formErrors, setFormErrors] = useState({});
    const [formStatus, setFormStatus] = useState("");

    const updateFileName = (e) => {
        let pathSegments = e.target.value.split("\\");
        let filename = pathSegments[pathSegments.length-1];
        setSelectedFile(filename);
    };

    const clearFields = () => {
        setSelectedFile("");
        setId("");
        setFirstname("");
        setLastname("");
        setEmpStatus("");
        setDepartment("");
        setEmail("");
    };

    const handleForm = async(e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("id", id);
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("department", department);
        formData.append("empStatus", empStatus);
        formData.append("email", email);
        formData.append("document", fileField.current.files[0]);
        formData.append("documentName", selectedFile);

        const req = await fetch(`${config.apiUrl}/`, {
            method: 'POST',
            body: formData
        });

        const json = await req.json();

        setFormErrors({});
        if(json.status == 1 && json.text) {
            setFormStatus(json.text);
            clearFields();
        } else {
            setFormStatus("");
        }

        setFormErrors(json.errors);
    };

    return (
        <form>
            <h2 className="title">Employee Record</h2>

            <div className="fieldset">
            <label htmlFor="f_fname">First Name<span className="required">*</span></label>
            <input id="f_fname" className={formErrors.firstname && "error"} type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
            {formErrors.firstname && <span className="error-msg"><i class="fas fa-circle-info"></i>{formErrors.firstname}</span>}
            </div>

            <div className="fieldset">
            <label htmlFor="f_lname">Last Name<span className="required">*</span></label>
            <input id="f_lname" className={formErrors.lastname && "error"} type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
            {formErrors.lastname && <span className="error-msg"><i class="fas fa-circle-info"></i>{formErrors.lastname}</span>}
            </div>

            <div className="fieldset">
            <label htmlFor="f_id">ID<span className="required">*</span></label>
            <input id="f_id" className={formErrors.id && "error"} type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            {formErrors.id && <span className="error-msg"><i class="fas fa-circle-info"></i>{formErrors.id}</span>}
            </div>

            <div className="fieldset">
            <label htmlFor="f_dept">Department<span className="required">*</span></label>
            <input id="f_dept" className={formErrors.department && "error"} type="text" value={department} onChange={(e) => setDepartment(e.target.value)}/>
            {formErrors.department && <span className="error-msg"><i class="fas fa-circle-info"></i>{formErrors.department}</span>}
            </div>

            <div className="fieldset">
            <label htmlFor="f_status">Employment Status<span className="required">*</span></label>
            <select id="f_status" className={formErrors.empStatus && "error"} value={empStatus} onChange={(e) => setEmpStatus(e.target.value)}>
                <option value="">Select</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contractual">Contractual</option>
            </select>
            {formErrors.empStatus && <span className="error-msg"><i class="fas fa-circle-info"></i>{formErrors.empStatus}</span>}
            </div>

            <div className="fieldset">
            <label htmlFor="f_email">Email<span className="required">*</span></label>
            <input id="f_email" className={formErrors.email && "error"} type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            {formErrors.email && <span className="error-msg"><i class="fas fa-circle-info"></i>{formErrors.email}</span>}
            </div>

            <div className="fieldset">
                <label htmlFor="f_doc">Document<br/><span className="text-s">Max size: 5 MB</span></label>
                <div className={`file-upload inline-block mr1 ${formErrors.document && "error"}`}>
                    <input id="f_doc" ref={fileField} type="file" className="mb1" onChange={(e) => updateFileName(e)}/>
                </div>
                {selectedFile && <div>
                    <p className="nm"><strong>File selected: </strong>{selectedFile}</p>
                    {formErrors.document && <p className="error-msg nm"><i class="fas fa-circle-info"></i>{formErrors.document}</p>}
                </div>}
            </div>

            <button className="button mb3" type="submit" onClick={handleForm}>Submit</button>
            {formStatus && <p>{formStatus}</p>}
        </form>
    );
}

export default EmployeeRecordhtmlForm;