import "../styles/reset.css";
import LandingPage from "./LandingPage";
import Account from "./Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/variables.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="/:rsn" element={<Account />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
