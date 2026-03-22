"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Engineer", path: "/engineer" },
  { name: "Artist", path: "/artist" },
  { name: "Consulting", path: "/consulting" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg"
    >
      <ul className="flex items-center gap-6 font-inter">
        {links.map((link) => {
          const isActive = pathname === link.path;
          return (
            <li key={link.path} className="relative">
              <Link 
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
