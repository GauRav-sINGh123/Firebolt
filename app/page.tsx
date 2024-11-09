"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Flame, ArrowRight, Sparkles, Code, Smartphone, Mail, Star, Archive, Trash2, Clock, Users, MessageSquare, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(springScroll, [0, 1], [0, -50]);
  const opacity = useTransform(springScroll, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.documentElement.style.setProperty('--mouse-x', `${x * 100}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div ref={targetRef} className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6 mt-16"
            >
              <Flame className="w-16 h-16 text-[#FF6B00]" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Ignite Your</span>{" "}
              <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] bg-clip-text text-transparent">Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Create stunning web experiences with modern design and smooth animations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#FF6B00] text-white group"
                asChild
              >
                <Link href="/about">
                  Get Started
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight />
                  </motion.span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#FF6B00] text-[#FF6B00] hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Email Interface Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 rounded-xl overflow-hidden border border-gray-800 bg-black/50 backdrop-blur-sm opacity-80"
          >
            <div className="flex">
              {/* Sidebar */}
              <div className="w-64 border-r border-gray-800 p-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#FF6B00]/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#FF6B00]" />
                  </div>
                  <span className="font-semibold">Inbox</span>
                  <span className="ml-auto text-sm text-gray-500">128</span>
                </div>
                {sidebarItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800/50 cursor-pointer mb-1"
                  >
                    <item.icon className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{item.label}</span>
                    {item.count && (
                      <span className="ml-auto text-sm text-gray-500">{item.count}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 p-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Meeting Tomorrow</h2>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                      <Archive className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF6B00]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#FF6B00] font-semibold">WS</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">William Smith</span>
                        <span className="text-sm text-gray-500">&lt;williamsmith@example.com&gt;</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing
                        the project details and have some ideas I'd like to share. It's crucial that
                        we align on our next steps to ensure the project's success.
                      </p>
                      <div className="mt-4 flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-gray-800 text-sm text-gray-300">meeting</span>
                        <span className="px-3 py-1 rounded-full bg-gray-800 text-sm text-gray-300">work</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="feature-card p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 hover:border-[#FF6B00] transition-all duration-300"
              >
                <div className="mb-4">
                  <feature.icon className="w-10 h-10 text-[#FF6B00]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            style={{ y, opacity }}
            className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="p-6 rounded-lg bg-black/50 backdrop-blur-sm border border-gray-800"
              >
                <motion.h3
                  className="text-4xl font-bold text-[#FF6B00]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center p-8 rounded-2xl bg-gradient-to-r from-[#FF6B00]/20 to-black/50 border border-[#FF6B00]/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have already elevated their online presence
            </p>
            <Button
              size="lg"
              className="bg-[#FF6B00] hover:bg-[#FF8533] text-white"
            >
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Modern Design",
    description: "Clean and contemporary aesthetics that capture attention and engage users.",
    icon: Sparkles
  },
  {
    title: "Smooth Animations",
    description: "Fluid motion and transitions that bring your content to life.",
    icon: Code
  },
  {
    title: "Responsive Layout",
    description: "Perfect viewing experience across all devices and screen sizes.",
    icon: Smartphone
  }
];

const stats = [
  { value: "99%", label: "Customer Satisfaction" },
  { value: "1M+", label: "Active Users" },
  { value: "24/7", label: "Support Available" },
  { value: "150+", label: "Countries Served" },
];

const sidebarItems = [
  { icon: Mail, label: "Inbox", count: "128" },
  { icon: Star, label: "Drafts", count: "9" },
  { icon: Archive, label: "Sent" },
  { icon: Trash2, label: "Junk", count: "23" },
  { icon: Archive, label: "Archive" },
  { icon: Users, label: "Social", count: "972" },
  { icon: Clock, label: "Updates", count: "342" },
  { icon: MessageSquare, label: "Forums", count: "128" },
  { icon: ShoppingBag, label: "Shopping", count: "8" },
];