import React from "react";
import "../styles/SearchButton.css";

type Props = {
    onClick: () => void;
    children: React.ReactNode;
};

const SearchButton = ({ onClick, children }: Props) => {
    return (
        <button className="button" type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default SearchButton;
