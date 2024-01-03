import "../styles/reset.css";
import LandingPage from "./LandingPage";
import Account from "./Account";
import AccountAll from "./AccountAll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/variables.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="/:rsn" element={<Account />} />
                <Route path="/:rsn/all" element={<AccountAll />} />
                <Route path="/:rsn/:save" element={<AccountAll />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
