import React from 'react';

interface WhatsappIconProps {
    className?: string;
    size?: number;
}

const WhatsappIcon: React.FC<WhatsappIconProps> = ({
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
            aria-label="WhatsApp"
        >
            <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
                fill="url(#whatsapp-gradient)"
            />
            <path
                d="m10 30.05 1.437-5.364a9.9 9.9 0 0 1-1.241-4.784c0-5.46 4.443-9.902 9.902-9.902C25.558 10 30 14.443 30 19.902c0 5.46-4.443 9.902-9.902 9.902a9.9 9.9 0 0 1-4.707-1.2zm5.659-3.454.34.203a8 8 0 0 0 4.099 1.135c4.429 0 8.03-3.602 8.03-8.03 0-4.43-3.601-8.032-8.03-8.032s-8.031 3.603-8.031 8.031c0 1.462.406 2.902 1.174 4.164l.21.342-.803 2.993z"
                fill="#fff"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.794 21.28c-.408-.244-.938-.516-1.419-.319-.368.15-.604.728-.842 1.022-.122.151-.269.175-.456.1-1.383-.551-2.442-1.475-3.206-2.747-.13-.198-.106-.354.05-.536.23-.271.52-.58.582-.946s-.11-.793-.26-1.119c-.194-.416-.41-1.01-.827-1.245-.384-.217-.888-.096-1.23.183-.59.48-.874 1.232-.866 1.977q.005.32.078.627c.12.492.347.95.602 1.387q.288.494.628.955a9.7 9.7 0 0 0 2.725 2.53 8.2 8.2 0 0 0 1.7.808c.665.22 1.258.45 1.978.313.753-.143 1.495-.609 1.794-1.335.089-.215.132-.454.083-.68-.1-.469-.736-.748-1.114-.974"
                fill="#fff"
            />
            <defs>
                <linearGradient
                    id="whatsapp-gradient"
                    x1="34.142"
                    y1="5.858"
                    x2="5.857"
                    y2="34.143"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#938178" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default WhatsappIcon;
