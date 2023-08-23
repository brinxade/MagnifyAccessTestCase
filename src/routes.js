import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    Routes,
} from "react-router-dom";
import EmployeeRecordForm from "./components/EmployeeRecordForm";
import EmployeeLookup from "./components/EmployeeLookup";
import Layout from "./components/Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<EmployeeRecordForm/>}/>
                <Route path="/lookup" element={<EmployeeLookup/>}/>
            </Route>
        </Routes>
    )
);

export default router;