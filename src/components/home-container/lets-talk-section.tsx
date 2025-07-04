"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LetsTalkSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Peaceful nature path representing hope and healing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <div className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">
              Let's Talk
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              How We Talk About Suicide Matters
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl">
              Let's face it, suicide is a very difficult topic. And believe it
              or not, even mental health professionals struggle with how to talk
              about it. This is why it's so important to bring the discussion of
              suicide into the open.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center sm:justify-start"
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold w-full sm:w-auto max-w-xs"
              >
                More About Suicide
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { LetsTalkSection };
