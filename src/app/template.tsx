"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(true);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);

  // Reset exit transition states when pathname changes
  useEffect(() => {
    setIsExiting(false);
    setIsEntering(true);
    setPendingUrl(null);
  }, [pathname]);

  // Intercept local navigations to run transition animations
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.href) {
        try {
          const targetUrl = new URL(anchor.href);
          
          // Only transition internal routes
          if (targetUrl.origin === window.location.origin) {
            const isDownload = anchor.hasAttribute("download");
            const isBlank = anchor.target === "_blank";
            const hrefAttr = anchor.getAttribute("href") || "";
            const isHashOnly = hrefAttr.startsWith("#") || (hrefAttr.includes("#") && hrefAttr.split("#")[0] === "");
            const isSamePageHash = targetUrl.pathname === window.location.pathname && targetUrl.hash !== "";

            if (isDownload || isBlank || isHashOnly || isSamePageHash) {
              return;
            }

            e.preventDefault();
            const href = targetUrl.pathname + targetUrl.search + targetUrl.hash;
            
            // Trigger exit animation
            setIsExiting(true);
            setPendingUrl(href);
          }
        } catch (err) {
          // Ignore invalid URL parse errors
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Perform route change after exit animation completes (400ms)
  useEffect(() => {
    if (isExiting && pendingUrl) {
      const timer = setTimeout(() => {
        startTransition(() => {
          router.push(pendingUrl);
        });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isExiting, pendingUrl, router]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0.8, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="flex-grow flex flex-col w-full"
      >
        {children}
      </motion.div>

      {/* Futuristic slide transition curtain overlay */}
      {(isEntering || isExiting) && (
        <motion.div
          initial={isExiting ? { y: "100%" } : { y: "0%" }}
          animate={isExiting ? { y: "0%" } : { y: "-100%" }}
          exit={isExiting ? { y: "0%" } : { y: "-100%" }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => {
            if (!isExiting) {
              setIsEntering(false);
            }
          }}
          className="fixed inset-0 z-50 bg-[#2563eb] flex items-center justify-center pointer-events-none"
        >
          {/* Centered logo/telemetry loader */}
          <div className="flex flex-col items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05, duration: 0.2 }}
              className="font-sans text-3xl font-black tracking-widest text-white uppercase"
            >
              SEREN<span className="text-cyan-300">IQ</span>
            </motion.h2>
            <div className="w-16 h-0.5 bg-white/20 mt-4 overflow-hidden rounded-full relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="absolute top-0 bottom-0 w-8 bg-cyan-300"
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
