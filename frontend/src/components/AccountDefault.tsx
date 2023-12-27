import "../styles/AccountDefault.css";

const AccountDefault = ({ rsn }: { rsn: string | undefined }) => {
  return (
    <div className="accountDefault">
      <h1>{rsn}'s Stats</h1>
    </div>
  );
};

export default AccountDefault;
