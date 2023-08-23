import { Route, Routes } from "react-router-dom";
import EmployeeRecordForm from "./components/EmployeeRecordForm";
import EmployeeLookup from "./components/EmployeeLookup";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<EmployeeRecordForm/>}/>
                    <Route path="lookup" element={<EmployeeLookup/>}/>
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;