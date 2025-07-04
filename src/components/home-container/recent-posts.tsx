"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const RecentPosts = () => {
  const posts = [
    {
      title: "June is Men's Health Month",
      excerpt:
        "Make your health a priority this Men's Health Month. Schedule a wellness visit to discuss your health concerns with your doctor.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      category: "Men's Health",
    },
    {
      title:
        "More Than Just Hot Flashes: The Lesser-Known Physical and Psychological Symptoms of Menopause",
      excerpt:
        "When people think about menopause, the first thing that comes to mind is the hot flashes. But there are many other symptoms to be aware of.",
      image:
        "https://images.unsplash.com/photo-1594824804732-5f8fcaf009d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      category: "Women's Health",
    },
    {
      title:
        "Understanding Mental Health: Breaking the Stigma and Finding Support",
      excerpt:
        "Mental health is just as important as physical health. Learn about resources and support available in our community.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
      category: "Mental Health",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Posts
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
            Learn about a wide variety of health and wellness related topics
            from the experts and clinicians of Care New England - click here to
            view all articles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <Badge
                    variant="secondary"
                    className="text-blue-600 bg-blue-50 mb-3 w-fit"
                  >
                    {post.category}
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 line-clamp-2 flex-grow-0">
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900 bg-transparent w-full sm:w-auto mt-auto"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { RecentPosts };
