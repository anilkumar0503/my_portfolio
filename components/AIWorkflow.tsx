"use client";

import { motion } from "framer-motion";
import { Brain, Code, CheckCircle, Lightbulb, TestTube } from "lucide-react";

export default function AIWorkflow() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Architecture-First Approach",
      description: "Design system architecture, database schema, and scalable API contracts",
      points: ["System design", "Database modeling", "API planning", "Modular structure"],
    },
    {
      icon: Brain,
      title: "AI-Assisted Implementation",
      description: "Leverage AI for rapid development while maintaining quality",
      points: ["Boilerplate generation", "Component scaffolding", "Documentation", "Test generation"],
    },
    {
      icon: CheckCircle,
      title: "Deep Technical Review",
      description: "Rigorous review for security, performance, and maintainability",
      points: ["Security audit", "Performance optimization", "Code quality", "Best practices"],
    },
    {
      icon: Code,
      title: "Critical Logic Development",
      description: "Personally design and implement core business logic",
      points: ["Payment systems", "AI workflows", "Security features", "Integrations"],
    },
    {
      icon: TestTube,
      title: "Testing & Optimization",
      description: "Comprehensive testing and production deployment",
      points: ["Test coverage", "Performance tuning", "Deployment", "Monitoring"],
    },
  ];

  return (
    <section id="ai-workflow" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            AI-Augmented Development Approach
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Leveraging AI assistants as force multipliers while maintaining technical excellence
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 items-start bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {step.points.map((point) => (
                      <div key={point} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 text-6xl font-bold text-primary-200 dark:text-primary-900">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Results Achieved</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3-5x</div>
                <div className="text-primary-100">Engineering Workflow Acceleration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-primary-100">Production Features Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Zero</div>
                <div className="text-primary-100">Critical Security Issues</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
