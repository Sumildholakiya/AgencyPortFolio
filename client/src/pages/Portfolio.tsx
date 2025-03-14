import { motion } from "framer-motion";
import PortfolioItem from "@/components/PortfolioItem";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      imageUrl: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
      category: "Web Development",
    },
    {
      title: "Mobile Banking App",
      description: "Secure and user-friendly banking application",
      imageUrl: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
      category: "App Development",
    },
    {
      title: "Marketing Campaign",
      description: "Successful digital marketing strategy",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      category: "Digital Marketing",
    },
    {
      title: "Corporate Website",
      description: "Professional website with modern design",
      imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      category: "Web Development",
    },
    {
      title: "Brand Identity",
      description: "Complete brand redesign and guidelines",
      imageUrl: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
      category: "Branding",
    },
    {
      title: "Social Media Growth",
      description: "Organic growth strategy implementation",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      category: "Social Media",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design system",
      imageUrl: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64",
      category: "Design",
    },
    {
      title: "Game Development",
      description: "Engaging mobile game experience",
      imageUrl: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
      category: "Gaming",
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
            <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses achieve
              their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <PortfolioItem
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  category={item.category}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
