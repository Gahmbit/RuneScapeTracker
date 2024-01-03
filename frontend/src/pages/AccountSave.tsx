import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AccountSaveDefault from "../components/AccountSaveDefault";
import Version from "../components/Version";
import "../styles/Account.css";

const Account = () => {
    const { save } = useParams();
    return (
        <div className="account">
            <Header />
            <Version />
            <AccountSaveDefault save={save} />
            <Footer />
        </div>
    );
};

export default Account;
