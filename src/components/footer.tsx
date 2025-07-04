"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const partnerLogos = [
    { name: "Care New England", logo: "" },
    { name: "Integra", logo: "" },
    { name: "Kent Hospital", logo: "" },
    { name: "The Providence Center", logo: "" },
    { name: "VNA", logo: "" },
    { name: "Women & Infants", logo: "" },
  ];

  return (
    <footer className="bg-[#6A1B9A] text-white">
      {/* Partner Logos */}
      <div className="border-b border-purple-400/20 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="hover:scale-105 transition-all duration-300"
              >
                <div className="h-10 sm:h-12 w-24 sm:w-32 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-white/80 text-xs sm:text-sm font-medium text-center px-2">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                <p className="font-medium">1-844-TPC-HELP</p>
                <p className="text-xs sm:text-sm">(1-844-872-4357)</p>
                <p>528 North Main Street</p>
                <p>Providence, RI 02904</p>
              </div>
            </motion.div>

            {/* Other Care New England Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Other Care New England Locations
              </h3>
              <div className="space-y-2 text-sm">
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Care New England
                </Link>
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Butler Hospital
                </Link>
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Kent Hospital
                </Link>
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  VNA of Care New England
                </Link>
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Women & Infants Hospital
                </Link>
              </div>
            </motion.div>

            {/* About Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                About Us
              </h3>
              <div className="space-y-2 text-sm">
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Who We Are
                </Link>
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Newsroom & Events
                </Link>
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  In the News
                </Link>
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Privacy
                </Link>
              </div>
            </motion.div>

            {/* Get Involved */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Get Involved
              </h3>
              <div className="space-y-2 text-sm">
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Ways to Give
                </Link>
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Volunteer
                </Link>
              </div>

              {/* Patients and Visitors */}
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 mt-6 sm:mt-8">
                Patients and Visitors
              </h3>
              <div className="space-y-2 text-sm">
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Find A Provider
                </Link>
                <Link
                  href="#"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Patient Community Care
                </Link>
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
                Copyright © 2024 Care New England Health System
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export {Footer}