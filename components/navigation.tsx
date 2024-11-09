"use client";

import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Flame className="w-8 h-8 text-[#FF6B00]" />
            <span className="font-bold text-xl">Firebolt</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="border-[#FF6B00] text-[#FF6B00] hover:text-white "
            >
              Sign In
            </Button>
            <Button
              className="bg-[#FF6B00] hover:bg-[#FF8533] text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-[#FF6B00] transition-colors relative group"
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all duration-300"
        whileHover={{ width: "100%" }}
      />
    </Link>
  );
}