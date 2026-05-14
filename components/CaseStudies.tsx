"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Nourish AI - AI Interview Platform",
      challenge: "MBA aspirants needed comprehensive interview preparation with personalized AI feedback and college recommendations.",
      approach: [
        "Designed microservices architecture for AI processing",
        "AI based Video Generation based on User feedback",
        "Integrated OpenAI for intelligent question generation",
        "Built video recording and AI evaluation engine",
        "Implemented Razorpay for subscription management",
      ],
      results: [
        { icon: Users, metric: "250+", label: "Active Users" },
        { icon: Zap, metric: "500+", label: "AI Interviews Conducted" },
        { icon: TrendingUp, metric: "95%", label: "User Satisfaction" },
      ],
      tech: ["Next.js", "OpenAI", "ElevenLabs", "Razorpay", "PostgreSQL"],
    },
    {
      title: "Edmark Education Ecosystem",
      challenge: "Educational institutions needed a unified platform to manage academics, operations, finance, and student engagement.",
      approach: [
        "Architected modular ecosystem combining ERP, LMS, CRM, HRM",
        "Built scalable microservices for independent deployments",
        "Implemented AI-powered assessment and analytics engines",
        "Integrated payment, communication, and mobile platforms",
      ],
      results: [
        { icon: Users, metric: "30,000+", label: "Students Managed" },
        { icon: Zap, metric: "100K+", label: "Daily Transactions" },
        { icon: TrendingUp, metric: "90%", label: "Downtime Reduction" },
      ],
      tech: ["Laravel", "Vue.js", "MySQL", "Microservices", "Mobile Apps"],
    },
    {
      title: "AI-Augmented Development Workflow",
      challenge: "Need to accelerate engineering delivery while maintaining code quality and security standards.",
      approach: [
        "Implemented AI-assisted development workflows",
        "Established architecture-first design principles",
        "Created rigorous review processes for security",
        "Built automated testing and deployment pipelines",
      ],
      results: [
        { icon: Zap, metric: "30-40%", label: "Productivity Gain" },
        { icon: CheckCircle, metric: "10+", label: "Features in 6 Months" },
        { icon: TrendingUp, metric: "Zero", label: "Critical Vulnerabilities" },
      ],
      tech: ["Claude AI", "GitHub", "CI/CD", "Testing Automation"],
    },
  ];

  return (
    <section id="case-studies" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Deep dives into product development and measurable impact
          </p>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary-600 dark:text-primary-400">
                      Challenge
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary-600 dark:text-primary-400">
                      Approach
                    </h4>
                    <ul className="space-y-2">
                      {study.approach.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400">
                    Results
                  </h4>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result) => (
                      <div key={result.label} className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl">
                        <result.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold mb-1">{result.metric}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full"
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
