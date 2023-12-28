import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <h4>
                Made by{" "}
                <a href="https://github.com/Gahmbit/" target="_blank">
                    Gahmbit
                </a>{" "}
                &{" "}
                <a href="https://github.com/the-code-raccoon" target="_blank">
                    The Code Raccoon
                </a>
                , 2023.
            </h4>
            <h4>
                RuneScape is the trademark of{" "}
                <a href="http://jagex.com/" target="_blank">
                    Jagex Limited.
                </a>
            </h4>
        </div>
    );
};

export default Footer;
