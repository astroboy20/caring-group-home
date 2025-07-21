"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroContent = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto lg:ml-0 lg:mr-auto text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Welcome to A Caring Group home
            </motion.h2>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 items-start mb-12 max-w-lg"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#6A1B9A] hover:bg-[#5A1580] text-white px-8 py-3 text-base font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Schedule An Tour
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-[#6A1B9A] text-[#6A1B9A] hover:bg-[#6A1B9A] hover:text-white px-8 py-3 text-base font-semibold transition-all duration-200 transform hover:scale-105 bg-white"
              >
                Find A Provider
              </Button> */}
            </motion.div>

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                About us
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-[#6A1B9A]/5 border-l-4 border-[#6A1B9A] p-4 rounded-r-lg mt-6">
                  <p className="text-base font-medium text-gray-800">
                    Call us at{" "}
                    <Link href={"tel:100-000-0000"}>100-000-0000</Link> to
                    schedule an appointment for your and learn more
                    about our services
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { HeroContent };
