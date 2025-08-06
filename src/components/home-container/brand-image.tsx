import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const BrandImage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className=" inset-0 z-0">
        <Image
          src="/images/brand-image.jpg"
          alt="Compassionate mental health counseling session"
          fill
          className="object-cover"
          priority
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </div>

      {/* Content */}
    </motion.section>
  );
};

export default BrandImage;
