import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Header from "./components/Header.tsx";
import HomeView from "./pages/HomeView.tsx";
import CreateEmployeeView from "./pages/CreateEmployeeView.tsx";
import "primereact/resources/themes/mira/theme.css";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        {/* <Loader /> */}
        <Header />
        <Routes>
          <Route path="/employee-list" element={<HomeView />} />
          <Route path="/create-employee" element={<CreateEmployeeView />} />
          <Route path="*" element={<HomeView />}></Route>
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
