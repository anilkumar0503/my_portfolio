"use client";

import { motion } from "framer-motion";
import { Code2, Users, Rocket, Target, Zap, Award } from "lucide-react";

export default function About() {
  const expertise = [
    { icon: Target, title: "Product Strategy", desc: "End-to-end product lifecycle management" },
    { icon: Code2, title: "AI Development", desc: "AI-augmented engineering workflows" },
    { icon: Users, title: "Team Leadership", desc: "Led 20+ cross-functional teams" },
    { icon: Rocket, title: "SaaS Architecture", desc: "Scalable EdTech ecosystems" },
    { icon: Zap, title: "Rapid Delivery", desc: "10+ features in 6 months" },
    { icon: Award, title: "Quality Focus", desc: "Zero critical vulnerabilities" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-4xl mx-auto mb-16">
            Results-driven Product Manager and Technology Leader with 10 years of experience 
            designing, building, and scaling AI-powered EdTech ecosystems, SaaS platforms, 
            ERP systems, LMS platforms, CRM solutions, and Digital Campus products.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Product Management & Strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  AI-Augmented Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  SaaS Platform Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Engineering Leadership
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Agile Product Delivery
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  ERP, CRM, HRM & LMS Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  AI based Video Generation based on User feedback
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Microservices Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  API Architecture & Integrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Data-Driven Decisions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Team Management (20+ members)
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
