"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brand-logo.jpg"
          alt="Compassionate mental health counseling session"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Focused on the Patient,
            <span className="block">Driven by Recovery,</span>
            <span className="block">Powered by Innovation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto px-4"
          >
            Supporting adults, adolescents, and children experiencing
            psychiatric, emotional, or substance use challenges through
            accessible and compassionate care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#6A1B9A] hover:bg-[#5A1580] text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Schedule An Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#6A1B9A] px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-200 transform hover:scale-105 bg-transparent"
            >
              Find A Provider
            </Button>
          </motion.div>
        </motion.div>

        {/* Accreditation Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 hidden md:block"
        >
          <div className="bg-white/90 rounded-full p-3 md:p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs font-bold text-gray-800">CARF</div>
              <div className="text-xs text-gray-600">Accredited</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { HeroSection };
