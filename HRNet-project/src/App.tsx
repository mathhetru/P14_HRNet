import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import Header from "./components/Header.tsx";
import EmployeeList from "./pages/EmployeeList.tsx";
import CreateEmployeeView from "./pages/CreateEmployeeView.tsx";
import "primereact/resources/themes/mira/theme.css";
import "./styles/style.scss";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        {/* <Loader /> */}
        <Header />
        <div id="container" className="-mt-8 bg-green-light">
          <Routes>
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="/create-employee" element={<CreateEmployeeView />} />
            <Route path="*" element={<CreateEmployeeView />}></Route>
          </Routes>
        </div>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
