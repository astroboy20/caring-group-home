"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Find A Provider", href: "/find-provider" },
    { name: "Get Help", href: "/get-help" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Client Resources", href: "/resources" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#6A1B9A] text-white py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="hidden sm:flex items-center space-x-4">
              <span className="flex items-center">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Select Language
              </span>
              <span className="flex items-center">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Careers
              </span>
              <span>Donate</span>
            </div>
            <Link
              href={"tel:100-000-0000"}
              className="flex items-center ml-auto"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="text-xs sm:text-sm">100-000-0000</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#6A1B9A] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">
                  CGH
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="text-[#6A1B9A] font-bold text-base sm:text-lg">
                  A CARING
                </div>
                <div className="text-[#6A1B9A] font-bold text-base sm:text-lg">
                  GROUP HOME
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-[#6A1B9A] transition-colors duration-200 font-medium text-sm xl:text-base"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-gray-700 hover:text-[#6A1B9A] hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t">
                  <Button className="w-full bg-[#6A1B9A] hover:bg-[#5A1580]">
                    Emergency Help
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export { Header };
