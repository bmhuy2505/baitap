import React from "react";

const Banner = () => {
    return (
        <section
            style={{
                background: "url(banner.jpg)",
                height: "300px",
                textAlign: "center",
                color: "white",
            }}
        >
            <h2>Welcome to Our Website</h2>
            <p>This is the banner section with an image background.</p>
        </section>
    );
};

export default Banner;
