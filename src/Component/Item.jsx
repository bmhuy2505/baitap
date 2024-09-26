import React from "react";

const Item = ({ name, description }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "20px",
                margin: "10px",
                width: "200px",
            }}
        >
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Item;
