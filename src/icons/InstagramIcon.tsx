import React from 'react';

interface InstagramIconProps {
    className?: string;
    size?: number;
}

const InstagramIcon: React.FC<InstagramIconProps> = ({
    className = "",
    size = 40
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            role="img"
            aria-label="Instagram"
        >
            <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
                fill="url(#instagram-gradient)"
            />
            <path
                d="M25.297 13.57a1.173 1.173 0 1 0 0 2.346 1.173 1.173 0 0 0 0-2.345m-5.215 1.504A4.93 4.93 0 0 0 15.156 20a4.93 4.93 0 0 0 4.926 4.925A4.93 4.93 0 0 0 25.007 20a4.93 4.93 0 0 0-4.925-4.925m0 8.08A3.16 3.16 0 0 1 16.926 20a3.16 3.16 0 0 1 3.156-3.154A3.16 3.16 0 0 1 23.236 20a3.156 3.156 0 0 1-3.154 3.154"
                fill="#fff"
            />
            <path
                d="M23.992 29.999h-7.985A6.014 6.014 0 0 1 10 23.992v-7.985A6.013 6.013 0 0 1 16.007 10h7.985A6.015 6.015 0 0 1 30 16.007v7.985a6.014 6.014 0 0 1-6.008 6.007m-7.984-18.117a4.13 4.13 0 0 0-4.126 4.126v7.985a4.13 4.13 0 0 0 4.126 4.126h7.985a4.13 4.13 0 0 0 4.127-4.126v-7.985a4.13 4.13 0 0 0-4.127-4.126z"
                fill="#fff"
            />
            <defs>
                <linearGradient
                    id="instagram-gradient"
                    x1="34.142"
                    y1="5.858"
                    x2="5.857"
                    y2="34.143"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="1" stopColor="#938178" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default InstagramIcon;
