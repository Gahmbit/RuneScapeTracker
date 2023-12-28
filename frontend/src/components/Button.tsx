import React from "react";
import "../styles/Button.css";

type Props = {
    onClick: () => void;
    children: React.ReactNode;
};

const Button = ({ onClick, children }: Props) => {
    return (
        <button className="button" type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
