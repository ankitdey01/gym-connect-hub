import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { Trophy, Users, Target, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Active Members" },
  { icon: Trophy, value: "150+", label: "Competitions Won" },
  { icon: Target, value: "98%", label: "Goal Achievement" },
  { icon: Award, value: "25+", label: "Industry Awards" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium uppercase tracking-wider mb-6">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              ABOUT H3 FITNESS
            </h1>
            <p className="text-muted-foreground text-lg">
              Building champions since 2009. Discover the passion, dedication, 
              and community that makes us the premier fitness destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium uppercase tracking-wider mb-6">
                Our Mission
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
                EMPOWERING TRANSFORMATIONS
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                At H3 FITNESS, we believe fitness is more than physical—it's mental, 
                emotional, and spiritual. Our mission is to create an inclusive environment 
                where everyone, from beginners to elite athletes, can discover their potential, 
                push their limits, and transform their lives. We're not just building bodies; 
                we're building confidence, resilience, and community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
