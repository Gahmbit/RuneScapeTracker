import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AccountDefault from "../components/AccountDefault";
import Version from "../components/Version";

const Account = () => {

  const { rsn } = useParams();
  return (
      <>
          <Header />
          <Version />
          <AccountDefault rsn={rsn} />
          <Footer />
      </>
  );
};

export default Account;
