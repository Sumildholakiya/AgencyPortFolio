import { motion } from "framer-motion";
import { Users, Award, Target, Zap } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Team Meeting",
      role: "Strategic Planning",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      name: "Creative Discussion",
      role: "Project Development",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },
    {
      name: "Collaborative Work",
      role: "Implementation",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    },
    {
      name: "Client Meeting",
      role: "Client Relations",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "100+", label: "Clients" },
    { icon: <Award className="h-6 w-6" />, value: "50+", label: "Projects" },
    { icon: <Target className="h-6 w-6" />, value: "5+", label: "Years" },
    { icon: <Zap className="h-6 w-6" />, value: "24/7", label: "Support" },
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
            <h1 className="text-4xl font-bold mb-6">About Bro Code</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a team of passionate developers, designers, and digital marketers
              dedicated to creating exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center text-primary mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground">
              Meet the talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-primary-foreground/90 mb-4">
                To empower businesses with innovative digital solutions that drive growth
                and success in the modern digital landscape.
              </p>
              <p className="text-primary-foreground/90">
                We strive to deliver exceptional value through cutting-edge technology,
                creative design, and strategic thinking.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-primary-foreground/90 mb-4">
                To be the leading digital agency that transforms businesses through
                innovative solutions and exceptional service.
              </p>
              <p className="text-primary-foreground/90">
                We aim to create lasting partnerships with our clients and contribute
                to their long-term success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
