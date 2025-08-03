"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const date: Date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[#6A1B9A] text-white">
      {/* Main Footer Content */}
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-6 sm:gap-8 w-full  ">
            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Contact Us
              </h3>
              <div className="space-y-2 text-sm">
                <p>Send Us A Message</p>
                <p className="font-medium">ACGH</p>
                <p className="text-xs sm:text-sm">000-000-0000</p>
                <p>1632 Chalkstone Avenue </p>
                <p>Providence, RI 02909</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Patients and Visitors */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 ">
                  Patients and Visitors
                </h3>
                <div className="space-y-2 text-sm">
                  <Link
                    href="#"
                    className="block hover:text-blue-200 transition-colors"
                  >
                    Schedule a Tour
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <Separator className="my-6 sm:my-8 bg-purple-400/20" />

          {/* Social Media & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="hover:text-blue-200 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="hover:text-blue-200 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="hover:text-blue-200 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="hover:text-blue-200 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
              <p className="text-xs sm:text-sm text-purple-200 text-center sm:text-right">
                Copyright ©{year} A Caring Group Home
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
