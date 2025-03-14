import { motion } from "framer-motion";
import {
  Code2,
  ShoppingCart,
  Layout,
  Smartphone,
  Gamepad2,
  Megaphone,
  Share2,
  Video,
  Bot,
  Palette,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description: "Custom websites built with React, Next.js for businesses and portfolios",
      icon: <Code2 className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
    },
    {
      title: "Shopify Development",
      description: "Professional e-commerce solutions with custom themes and integrations",
      icon: <ShoppingCart className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1649105703438-0992d6844823",
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress solutions with WooCommerce and optimization",
      icon: <Layout className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1605152276897-4f618f831968",
    },
    {
      title: "Game Development",
      description: "2D & 3D game development using Unity and Unreal Engine",
      icon: <Gamepad2 className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1529169436040-836f3d93f0f8",
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing and branding solutions",
      icon: <Megaphone className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1521699492617-3ed82a0501d6",
    },
    {
      title: "Social Media Management",
      description: "Strategic social media planning and growth services",
      icon: <Share2 className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1509046948809-cee7c67dc810",
    },
    {
      title: "Video Editing",
      description: "Professional video editing for all platforms",
      icon: <Video className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1519624133901-3420156d01b2",
    },
    {
      title: "AI Content Creation",
      description: "AI-powered content creation and automation solutions",
      icon: <Bot className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1518609819766-6c7ed22fa768",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions for web and mobile",
      icon: <Palette className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1653389526309-f8e2e75f8aaf",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of digital services to help your business
              thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  imageUrl={service.imageUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;