"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Heart, User, Users } from "lucide-react"
import Image from "next/image"

const HowCanWeHelp =()=> {
  const services = [
    {
      icon: Search,
      title: "Find A Provider",
      description: "Use our provider finder tool to locate the provider who is right for you.",
      color: "text-blue-600",
      bgImage:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: Heart,
      title: "I'm Seeking Help",
      description: "The Providence Center's dedicated staff is here to help you navigate your care.",
      color: "text-green-600",
      bgImage:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: User,
      title: "I'm A Client",
      description: "Our caring compassionate staff will guide you as you make recovery a reality.",
      color: "text-orange-600",
      bgImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: Users,
      title: "I'm A Care Provider",
      description: "Connect your patient with the specialty care they need.",
      color: "text-teal-600",
      bgImage:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
            The Providence Center helps adults, adolescents, and children affected by psychiatric diseases, emotional
            problems, and addictions by providing treatment and supportive services within a community setting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group">
                <div className="relative h-24 sm:h-32 overflow-hidden">
                  <Image
                    src={service.bgImage || "/placeholder.svg"}
                    alt={`${service.title} background`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/20 transition-colors duration-300" />
                </div>
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <div className="mb-3 sm:mb-4">
                    <service.icon className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto ${service.color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 flex-grow leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export {HowCanWeHelp}