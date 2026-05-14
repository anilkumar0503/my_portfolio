"use client";

import { motion } from "framer-motion";
import { Brain, GraduationCap, Heart, BookOpen, Users, Building } from "lucide-react";

export default function Products() {
  const products = [
    {
      icon: Brain,
      name: "Nourish AI",
      category: "AI Interview Platform",
      description: "Comprehensive AI-powered SaaS platform for MBA aspirants with CV builder, AI interviews, video feedback, and analytics.",
      features: ["AI Interview Engine", "Video Recording & Evaluation", "College Predictor", "Writing Center", "Payment Integration"],
      tech: ["Next.js", "OpenAI", "Razorpay", "ElevenLabs"],
    },
    {
      icon: GraduationCap,
      name: "Infinity Test Prep",
      category: "AI Assessment Engine",
      description: "AI-powered assessment platform with dynamic exam generation and adaptive learning workflows.",
      features: ["AI Question Generation", "20+ Question Formats", "Mock Exams", "Performance Analytics", "Adaptive Tests"],
      tech: ["Laravel", "AI APIs", "MySQL"],
    },
    {
      icon: Building,
      name: "Edmark Ecosystem",
      category: "Complete Education Platform",
      description: "Unified AI-powered education ecosystem integrating ERP, LMS, CRM, and Digital Campus systems.",
      features: ["Student Lifecycle Management", "LMS & Assessments", "Finance & Fee Management", "Analytics Dashboards", "Mobile Apps"],
      tech: ["Laravel", "Vue.js", "MySQL", "Microservices"],
    },
    {
      icon: Heart,
      name: "Psychology Buddy",
      category: "Student Wellbeing Platform",
      description: "Privacy-first platform for student emotional wellness tracking and institutional analytics.",
      features: ["Anonymous Reflections", "Wellness Tracking", "School Analytics", "Privacy-Focused Architecture"],
      tech: ["Next.js", "PostgreSQL"],
    },
    {
      icon: Users,
      name: "CRM Platform",
      category: "Lead Management System",
      description: "Comprehensive CRM solution for educational institutions with lead tracking and automation.",
      features: ["Lead Management", "Workflow Automation", "Analytics", "Integration APIs"],
      tech: ["Laravel", "Vue.js", "MySQL"],
    },
    {
      icon: BookOpen,
      name: "Digital Library System",
      category: "Resource Management",
      description: "Complete digital library management system with book inventory and student access control.",
      features: ["Book Inventory", "Student Access", "Search & Discovery", "Analytics"],
      tech: ["Laravel", "Vue.js"],
    },
  ];

  return (
    <section id="products" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            AI-Powered Products & Systems
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Delivered production-ready platforms serving thousands of users
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-3">
                  {product.category}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <div className="mb-4">
                  <div className="text-sm font-semibold mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-primary-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
