"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const DonateSection =() =>{
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
          alt="Hands coming together in support and community"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Donate Now and Make a Difference
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
            You can change the life of someone in need and make a family a little happier and healthier. Your
            tax-deductible donation helps us to provide the best mental health and substance use care for adults,
            children, and families in our community.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-[#6A1B9A] hover:bg-green-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto max-w-xs"
            >
              Donate Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export {DonateSection}