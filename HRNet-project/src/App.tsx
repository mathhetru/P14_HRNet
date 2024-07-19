import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import Header from "./components/Header.tsx";
import EmployeeList from "./pages/EmployeeList.tsx";
import CreateEmployeeView from "./pages/CreateEmployeeView.tsx";
import "primereact/resources/themes/mira/theme.css";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        {/* <Loader /> */}
        <Header />
        <Routes>
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/create-employee" element={<CreateEmployeeView />} />
          <Route path="*" element={<CreateEmployeeView />}></Route>
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
