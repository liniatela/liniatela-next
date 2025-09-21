import React from 'react';

interface TelegramIconProps {
    className?: string;
    size?: number;
}

const TelegramIcon: React.FC<TelegramIconProps> = ({
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
            aria-label="Telegram"
        >
            <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
                fill="url(#telegram-gradient)"
            />
            <path
                d="M28.18 12.04 9.39 19.18a.605.605 0 0 0 .021 1.14l4.846 1.636 11.033-7.12-8.738 8.15 6.803 5.163a1.238 1.238 0 0 0 1.949-.686l3.677-14.71a.605.605 0 0 0-.802-.713"
                fill="#fff"
            />
            <defs>
                <linearGradient
                    id="telegram-gradient"
                    x1="5.858"
                    y1="5.858"
                    x2="34.142"
                    y2="34.142"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#938178" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default TelegramIcon;
