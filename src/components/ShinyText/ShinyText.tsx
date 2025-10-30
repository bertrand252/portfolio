import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 1,
  className = "",
}) => {
  return (
    <div
      className={`text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text inline-block ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.1) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
