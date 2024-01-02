import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AccountAllDefault from "../components/AccountAllDefault";
import Version from "../components/Version";
import "../styles/Account.css";

const Account = () => {
    const { rsn } = useParams();
    return (
        <div className="account">
            <Header />
            <Version />
            <AccountAllDefault rsn={rsn} />
            <Footer />
        </div>
    );
};

export default Account;
