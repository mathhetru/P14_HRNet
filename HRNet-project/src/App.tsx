import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import "primereact/resources/themes/mira/theme.css";
import "./styles/style.scss";
import { lazy, Suspense } from "react";

const EmployeeList = lazy(() => import("./pages/EmployeeList.tsx"));
const CreateEmployeeView = lazy(() => import("./pages/CreateEmployeeView.tsx"));

function App() {
  return (
    <PrimeReactProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header />
          <Routes>
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="/create-employee" element={<CreateEmployeeView />} />
            <Route path="*" element={<CreateEmployeeView />}></Route>
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </PrimeReactProvider>
  );
}

export default App;
