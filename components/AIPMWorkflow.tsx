"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Star, 
  Code, 
  Activity, 
  Brain, 
  Users, 
  Settings, 
  Trophy,
  ArrowRight
} from "lucide-react";

export default function AIPMWorkflow() {
  const steps = [
    {
      icon: Search,
      title: "Discover Opportunities",
      subtitle: "with AI",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Analyze Data",
      subtitle: "& Insights",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Define Problems",
      subtitle: "& Outcomes",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Lightbulb,
      title: "Ideate & Validate",
      subtitle: "with AI",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Star,
      title: "Prioritize by",
      subtitle: "Impact (AI)",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Code,
      title: "Build & Test",
      subtitle: "Faster",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Activity,
      title: "Monitor in Real-time",
      subtitle: "(AI Insights)",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Brain,
      title: "Learn & Adapt",
      subtitle: "Continuously",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Personalize",
      subtitle: "User Experience",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Settings,
      title: "Optimize & Iterate",
      subtitle: "with AI",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Trophy,
      title: "Deliver Impact",
      subtitle: "at Scale",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="ai-pm-workflow" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            AI-Powered PM Framework
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-4 max-w-3xl mx-auto">
            Intelligent & Iterative Product Management
          </p>
          <p className="text-lg text-primary-600 dark:text-primary-400 text-center mb-16 font-medium">
            AI-driven loop for continuous discovery, validation, and impact
          </p>

          {/* Desktop View - Flow Diagram */}
          <div className="hidden lg:block">
            <div className="max-w-6xl mx-auto">
              {/* Top Row - Steps 1-6 */}
              <div className="flex justify-between items-center mb-4">
                {steps.slice(0, 6).map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className={`w-36 h-36 bg-gradient-to-br ${step.color} rounded-2xl shadow-lg flex flex-col items-center justify-center text-white p-4 hover:scale-105 transition-transform`}>
                      <step.icon className="w-8 h-8 mb-2" />
                      <div className="text-xs font-bold text-center leading-tight mb-1">
                        {step.title}
                      </div>
                      <div className="text-xs text-center opacity-90">
                        {step.subtitle}
                      </div>
                    </div>
                    {index < 5 && (
                      <ArrowRight className="w-6 h-6 mx-2 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Arrow Down */}
              <div className="flex justify-end mb-4">
                <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-600 rotate-90" />
              </div>

              {/* Arrow Back Up - positioned before bottom row */}
              <div className="flex justify-start mb-4">
                <div className="w-36 flex justify-center">
                  <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-600 -rotate-90" />
                </div>
              </div>

              {/* Bottom Row - Steps 7-11 (reversed) */}
              <div className="flex justify-between items-center flex-row-reverse">
                {steps.slice(6, 11).map((step, index) => (
                  <motion.div
                    key={index + 6}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center flex-row-reverse"
                  >
                    <div className={`w-36 h-36 bg-gradient-to-br ${step.color} rounded-2xl shadow-lg flex flex-col items-center justify-center text-white p-4 hover:scale-105 transition-transform`}>
                      <step.icon className="w-8 h-8 mb-2" />
                      <div className="text-xs font-bold text-center leading-tight mb-1">
                        {step.title}
                      </div>
                      <div className="text-xs text-center opacity-90">
                        {step.subtitle}
                      </div>
                    </div>
                    {index < 4 && (
                      <ArrowRight className="w-6 h-6 mx-2 text-gray-400 dark:text-gray-600 flex-shrink-0 rotate-180" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Center Message */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full shadow-xl">
                  <Brain className="w-8 h-8 text-white" />
                  <div className="text-white">
                    <div className="font-bold text-lg">AI-Driven Continuous Loop</div>
                    <div className="text-sm opacity-90">for discovery, validation, and impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet View - Linear Flow */}
          <div className="lg:hidden grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${step.color} rounded-2xl shadow-lg p-6 text-white`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">{step.title}</div>
                      <div className="text-sm opacity-90">{step.subtitle}</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-400 rotate-90" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                10x
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Faster Decision Making with AI Insights
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 rounded-xl">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                360°
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Data-Driven Product Vision
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-xl">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                Continuous
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Learning & Optimization Loop
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
