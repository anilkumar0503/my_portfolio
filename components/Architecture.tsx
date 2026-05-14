"use client";

import { motion } from "framer-motion";
import { Layers, GitBranch, Database, Cloud, Lock, Zap } from "lucide-react";

export default function Architecture() {
  const architectures = [
    {
      type: "Monolithic Architecture",
      icon: Layers,
      description: "Enterprise applications with unified business logic",
      useCases: ["ERP Systems", "LMS Platforms", "CRM Platforms", "Institutional Operations"],
      benefits: ["Centralized logic", "Faster development", "Unified auth", "Simplified deployment"],
      tech: ["Laravel", "Next.js", "Vue.js", "MySQL"],
    },
    {
      type: "Microservices Architecture",
      icon: GitBranch,
      description: "Scalable distributed systems with independent services",
      useCases: ["AI Processing", "Notification Systems", "Analytics Services", "Payment Systems"],
      benefits: ["Independent deployments", "Better scalability", "Service isolation", "Faster releases"],
      tech: ["Node.js", "Laravel", "PostgreSQL", "Redis"],
    },
  ];

  const techStack = [
    { category: "Frontend", icon: Zap, items: ["Vue.js", "Nuxt.js", "React.js", "Next.js", "TypeScript", "TailwindCSS"] },
    { category: "Backend", icon: Database, items: ["Laravel", "PHP", "Node.js", "REST APIs", "Microservices"] },
    { category: "Database", icon: Database, items: ["MySQL", "MongoDB", "PostgreSQL", "Redis"] },
    { category: "DevOps", icon: Cloud, items: ["CI/CD", "Linode", "Docker", "Git"] },
    { category: "Security", icon: Lock, items: ["OAuth", "JWT", "Encryption", "API Security"] },
  ];

  return (
    <section id="architecture" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            System Architecture Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Designing scalable architectures for complex educational ecosystems
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {architectures.map((arch, index) => (
              <motion.div
                key={arch.type}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <arch.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{arch.type}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{arch.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-primary-600 dark:text-primary-400">Use Cases</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {arch.useCases.map((useCase) => (
                      <div key={useCase} className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                        {useCase}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-primary-600 dark:text-primary-400">Benefits</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {arch.benefits.map((benefit) => (
                      <div key={benefit} className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {arch.tech.map((tech) => (
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

          <div>
            <h3 className="text-3xl font-bold text-center mb-12">Technical Stack</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((stack, index) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <stack.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    <h4 className="text-lg font-semibold">{stack.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Integration Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Razorpay", "OpenAI", "Gemini", "Hygen", "ElevenLabs", "Google OAuth", "WhatsApp APIs", "Email & SMS", "Linode S3"].map((integration) => (
                <span key={integration} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">
                  {integration}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
