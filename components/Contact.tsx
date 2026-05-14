"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, MapPin, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Open to Product Management and Technology Leadership opportunities
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg mb-12">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Role</h3>
                  <p className="text-gray-600 dark:text-gray-400">Product Manager & Technology Leader</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Open to Remote & Hybrid</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="mailto:bakkashettianilkumar@gmail.com"
                className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all group"
              >
                <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                  <div className="font-medium text-sm">Contact Me</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/anil-kumar-bakkashetti-649a3412a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all group"
              >
                <Linkedin className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                  <div className="font-medium text-sm">Connect</div>
                </div>
              </a>

              
            </div>
          </div>

          <div className="text-center">
            <a
              href="/resume.pdf"
              download="/resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all font-semibold"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-lg text-primary-50 max-w-3xl mx-auto">
My goal is to continue building impactful AI-powered platforms that simplify organizational operations, enhance user experiences, automate workflows, and create scalable digital ecosystems for the future.
            </p>
          </div>
        </motion.div>
      </div>

      <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2026  Anil Kumar Bakkashetti. All rights reserved.</p>
      </footer>
    </section>
  );
}
