import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Heart } from "lucide-react";
import "./MagnetizeButton.css";

function MagnetizeButton({
  children = "Converse comigo aqui",
  particleCount = 77,
  className = "",
  ...props
}) {
  const [isAttracting, setIsAttracting] = useState(false);
  const [particles, setParticles] = useState([]);
  const particlesControl = useAnimation();

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 600 - 300,
      y: Math.random() * 300 - 150,
    }));

    setParticles(newParticles);
  }, [particleCount]);

  const handleInteractionStart = async () => {
    setIsAttracting(true);

    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    });
  };

  const handleInteractionEnd = async () => {
    setIsAttracting(false);

    await particlesControl.start((i) => ({
      x: particles[i].x,
      y: particles[i].y,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }));
  };

  return (
    <button
      className={`magnetize-button ${className}`}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      {...props}
    >
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          custom={index}
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={particlesControl}
          className={`particle ${isAttracting ? "particle-active" : ""}`}
        />
      ))}

      <span className="magnetize-content">
        <Heart
          size={18}
          className={isAttracting ? "magnet-active" : ""}
          fill={isAttracting ? "currentColor" : "none"}
        />
        {isAttracting ? " Converse comigo aqui " : children}
      </span>
    </button>
  );
}

export default MagnetizeButton;
