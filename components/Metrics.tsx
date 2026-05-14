"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Shield, Rocket, Clock } from "lucide-react";

export default function Metrics() {
  const metrics = [
    {
      icon: Zap,
      value: "30-40%",
      label: "Engineering Productivity Improvement",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Rocket,
      value: "10+",
      label: "Production Features in 6 Months",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      value: "30,000+",
      label: "Active Users Served",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      value: "100K+",
      label: "Daily Transactions Handled",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      value: "95%",
      label: "User Satisfaction Rate",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: Clock,
      value: "50%",
      label: "Deployment Cycle Time Reduction",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="metrics" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Impact & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Measurable results driving business value and engineering excellence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                />
                <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${metric.color} mb-4`}>
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                    {metric.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-400">Team Members Led</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">90%</div>
              <div className="text-gray-600 dark:text-gray-400">System Downtime Reduction</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">10</div>
              <div className="text-gray-600 dark:text-gray-400">Years of Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
