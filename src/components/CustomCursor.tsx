"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 350, mass: 0.35 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only apply custom cursor on device with hover support (i.e. mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], .cursor-pointer");
      const projectCard = target.closest(".project-card-interactive");

      const isProjectCard = !!projectCard;
      const isInteractive = !projectCard && !!interactive;

      if (isProjectCard) {
        setHovered((prev) => (prev ? prev : true));
        setCursorText((prev) => (prev === "VIEW" ? prev : "VIEW"));
      } else if (isInteractive) {
        setHovered((prev) => (prev ? prev : true));
        setCursorText((prev) => (prev === "" ? prev : ""));
      } else {
        setHovered((prev) => (!prev ? prev : false));
        setCursorText((prev) => (prev === "" ? prev : ""));
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, visible]);

  // Don't render cursor on mobile devices
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsMobile(!mediaQuery.matches);
  }, []);

  if (isMobile || !visible) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#00D9FF] pointer-events-none z-50 flex items-center justify-center mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={{
          scale: hovered ? 1.8 : 1,
          backgroundColor: hovered ? "rgba(0, 87, 255, 0.15)" : "rgba(0, 0, 0, 0)",
          borderColor: hovered ? "#00D9FF" : "rgba(0, 217, 255, 0.4)",
        }}
      >
        {cursorText && (
          <span className="text-[7px] font-extrabold text-[#00D9FF] tracking-wider font-sans">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Spring Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#00D9FF] rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={{
          scale: hovered ? 0 : 1,
        }}
      />
    </>
  );
}
