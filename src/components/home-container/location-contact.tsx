"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { useState } from "react";

const LocationContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    requestTour: false,
  });

  const services = [
    "Mental Health Services",
    "Substance Use Treatment",
    "Adolescent Programs",
    "Adult Services",
    "Family Therapy",
    "Crisis Intervention",
    "Peer Recovery Support",
    "Housing Services",
    "Employment Services",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Location & Contact
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with us or visit our main location. We're here to help
            you on your journey to wellness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map and Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Interactive Map */}
            <Card className="overflow-hidden">
              <div className="relative h-64 sm:h-80 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.123456789!2d-71.4128!3d41.8240!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQ5JzI2LjQiTiA3McKwMjQnNDYuMSJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                <div className="absolute top-4 left-4 bg-[#6A1B9A] text-white p-2 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6A1B9A]/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-[#6A1B9A]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Main Location
                      </h3>
                      <p className="text-gray-600 mb-2">
                        1632 Chalkstone Avenue
                        <br />
                        Providence, RI 02909
                      </p>
                      {/* <Button variant="link" className="text-[#6A1B9A] hover:text-[#5A1580] p-0 h-auto font-medium">
                        Get Directions <ExternalLink className="w-4 h-4 ml-1" />
                      </Button> */}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Phone</h4>
                        <p className="text-sm text-gray-600">000-000-0000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Clock className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Hours</h4>
                        <p className="text-sm text-gray-600">
                          Mon-Fri: 8AM-6PM
                        </p>
                        <p className="text-xs text-gray-500">
                          24/7 Crisis Line
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                  Send Us a Message
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="border-gray-300 focus:border-[#6A1B9A] focus:ring-[#6A1B9A]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="000-000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="border-gray-300 focus:border-[#6A1B9A] focus:ring-[#6A1B9A]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="border-gray-300 focus:border-[#6A1B9A] focus:ring-[#6A1B9A]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger className="border-gray-300 focus:border-[#6A1B9A] focus:ring-[#6A1B9A] w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="border-gray-300 focus:border-[#6A1B9A] focus:ring-[#6A1B9A] resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="tour"
                      checked={formData.requestTour}
                      onCheckedChange={(checked: any) =>
                        setFormData({
                          ...formData,
                          requestTour: checked as boolean,
                        })
                      }
                      className="border-gray-300 data-[state=checked]:bg-[#6A1B9A] data-[state=checked]:border-[#6A1B9A]"
                    />
                    <Label
                      htmlFor="tour"
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      I'd like to schedule a facility tour
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#6A1B9A] hover:bg-[#5A1580] text-white py-3 text-base font-semibold transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    For immediate assistance or crisis support, please call our
                    24/7 helpline at{" "}
                    <span className="font-medium text-[#6A1B9A]">
                      000-000-0000
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { LocationContact };
