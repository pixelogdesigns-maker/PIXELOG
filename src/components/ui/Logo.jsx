import React from "react";

const Logo = ({ className = "h-12 w-auto", color = "currentColor" }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Outer Chevron */}
            <path
                d="M250 140 L370 260 L370 310 L250 190 L130 310 L130 260 Z"
                fill={color}
            />
            {/* Inner Chevron */}
            <path
                d="M250 240 L330 320 L330 370 L250 290 L170 370 L170 320 Z"
                fill={color}
            />
        </svg>
    );
};

export default Logo;
