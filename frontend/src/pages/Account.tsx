import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AccountDefault from "../components/AccountDefault";
import Version from "../components/Version";
import "../styles/Account.css"

const Account = () => {
    const { rsn } = useParams();
    return (
        <div className="account">
            <Header />
            <Version />
            <AccountDefault rsn={rsn} />
            <Footer />
        </div>
    );
};

export default Account;
