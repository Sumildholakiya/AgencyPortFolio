import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Globe,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to{" "}
              <span className="text-primary">Bro Code</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We transform innovative ideas into powerful digital solutions that drive success.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/services">
                <Button size="lg">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              Comprehensive digital solutions for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="Custom websites built with cutting-edge technologies"
              icon={<Code2 className="h-6 w-6" />}
              imageUrl="https://images.unsplash.com/photo-1556745753-b2904692b3cd"
            />
            <ServiceCard
              title="Mobile Apps"
              description="Native and cross-platform mobile applications"
              icon={<Smartphone className="h-6 w-6" />}
              imageUrl="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            />
            <ServiceCard
              title="Digital Marketing"
              description="Strategic digital marketing solutions"
              icon={<Globe className="h-6 w-6" />}
              imageUrl="https://images.unsplash.com/photo-1519624133901-3420156d01b2"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="mb-8 text-primary-foreground/90">
            Let's discuss your ideas and turn them into reality
          </p>
          <Link href="/contact">
            <Button
              variant="secondary"
              size="lg"
              className="group"
            >
              Get Started
              <MessageSquare className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
